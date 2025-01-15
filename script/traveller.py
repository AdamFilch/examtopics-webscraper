import json
import urllib.request
from bs4 import BeautifulSoup

def Main():
    
    with open('dumps/PROVIDER_LIST.json', 'r', encoding="cp850") as file:
            provider_list = json.load(file)
    
    # HTML = Traveller(provider_list[15])
    
    with open('EXAM_PROVIDER_EXAMPLE.txt', 'r', encoding="cp850") as file:
            HTML = file.read()
    
    exam_list = GetExamList(html=HTML)
        
        
    provider_list[15]['exams'] = exam_list
    
    with open("dumps/PROVIDER_LIST.json", 'w',  encoding='utf-8') as f: 
        json.dump(provider_list, f, ensure_ascii=False, indent=4)
        
        
    return

    
def Traveller(provider): 
    
    url = "https://www.examtopics.com/exams/" + '-'.join(provider['provider'].lower().split(' '))
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        res = urllib.request.urlopen(req).read()
        html_content = res.decode('utf-8')  # Decode the content to make it human-readable
        
        # Save the HTML content to a text file
        with open('EXAM_PROVIDER_EXAMPLE.txt', 'w', encoding='utf-8') as f:  # Use 'w' to overwrite the file, and specify encoding
            f.write(html_content)
        
        # return html_content
        return html_content
    except urllib.error.HTTPError as e:
        print(f"HTTP Error: {e.code}")
    except urllib.error.URLError as e:
        print(f"URL Error: {e.reason}")
    
    return


def GetExamList(html):
    soup = BeautifulSoup(html, "html.parser")
    exam_links = [ast.text.strip() for ast in soup.find_all('a', class_='popular-exam-link')]
    
    list = []
    for link in exam_links:
        splitted = link.split(': ')
        print('GetExamList', splitted)
        exam = {
            "exam_name": splitted[1],
            "exam_code": splitted[0],
            "popular": False
        }
        list.append(exam)
    
    return list
    


Main()



