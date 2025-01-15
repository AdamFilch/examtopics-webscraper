import urllib.request
from bs4 import BeautifulSoup
import json

def ExamList(): 
    
    # HTML = ExamPageScrape() # Scrape examtopics.com/exams/ page
    
    
    with open('EXAMTOPICS_EXAMS.txt', 'r', encoding="cp850") as file:
            scraped_html = file.read()
            
            
    ProviderExtract(html=scraped_html) # Get List of Cert Providers
    
    
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

def ProviderExtract(html):
    soup = BeautifulSoup(html, "html.parser")
    print("HTML content has SUCCESSFULLY scraped")
    
    
    # Get List of Cert Providers
    
    
    providers_list = [{
        "provider",
        "num_exams",
    }]
    
    
ExamList()
    
    
#     {
#         Provider: "Amazon",
#         Number_of_Exams: 23,
#         Exams: [
#            {
#             code: 'DVA-C02',
#             name: 'Certified Developer Associate',
#             popular: true
#         },
#         {
#             code: 'CLF-C02',
#             name: 'Certified Cloud Practitioner',
#             popular: true
#         },
#         {
#             code: 'DEA-C01',
#             name: 'Certified Data Engineer',
#             popular: true
#         },
#         ...
#         ]
# }
    