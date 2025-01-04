from bs4 import BeautifulSoup

def ExtractDataFromHTML():
    # html = open('TEST_HTML.txt')
    with open('TEST_html.txt', 'r', encoding="cp850") as file:
        html = file.read()
    soup = BeautifulSoup(html, "html.parser")
    
    discussion = soup.find_all("div", class_='discussion-header-container')
    print(discussion)
    
    

ExtractDataFromHTML()