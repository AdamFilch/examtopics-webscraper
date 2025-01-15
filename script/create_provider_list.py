import urllib.request
from bs4 import BeautifulSoup
import json


WRITE_INTO_FILE = 'PROVIDER_LIST.json'

def ExamList(): 
    
    HTML = ExamPageScrape() # Scrape examtopics.com/exams/ page

    res = ProviderExtract(html=HTML) # Get List of Cert Providers
    
    # Save the HTML content to a text file
    with open("dumps/" + WRITE_INTO_FILE, 'w',  encoding='utf-8') as f: 
        json.dump(res, f, ensure_ascii=False, indent=4)
             
             
    print("PROVIDERS Have been Saved")
    
    
    return



def ExamPageScrape():
    url = "https://www.examtopics.com/exams/"

    # Set a custom User-Agent to mimic a browser
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    req = urllib.request.Request(url, headers=headers)

    # Fetch the webpage
    try:
        res = urllib.request.urlopen(req).read()
        html_content = res.decode('utf-8')  # Decode the content to make it human-readable
        
        # Save the HTML content to a text file
        with open('EXAMTOPICS_EXAMS.txt', 'w', encoding='utf-8') as f:  # Use 'w' to overwrite the file, and specify encoding
            f.write(html_content)
        
        # return html_content
        return html_content
    except urllib.error.HTTPError as e:
        print(f"HTTP Error: {e.code}")
    except urllib.error.URLError as e:
        print(f"URL Error: {e.reason}")
        
def provider_list_strip(exam): 
    splitted = exam.split(' ')
    
    res = {
        "provider": splitted[0],
        "exam": '0'
    }
    return res

def ProviderExtract(html):
    soup = BeautifulSoup(html, "html.parser")
    print("HTML content has SUCCESSFULLY scraped")
    
    
    # Get List of Cert Providers
    provider_link = [div.text.strip() for div in soup.find_all('div', class_='provider-list-link')]
    
    provider_list = []
    for provider in provider_link: 
        splitted = provider.split(' (')
        

    
        justNum = splitted[1].replace(' exams)', '')
        res = {
            "provider": splitted[0],
            "no_exams": justNum
        }
        provider_list.append(res)
    
    return provider_list


    
ExamList()
    