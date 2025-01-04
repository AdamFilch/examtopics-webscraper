from bs4 import BeautifulSoup

def ExtractDataFromHTML():
    # html = open('TEST_HTML.txt')
    with open('TEST_html.txt', 'r', encoding="cp850") as file:
        html = file.read()
    soup = BeautifulSoup(html, "html.parser")
    
    # get the respective question, option and answers
    question_body = soup.find_all('div', class_='question-body')
    question = soup.find_all('p', class_='card-text')
    multi_choice = soup.find_all("span", class_='multi-choice-letter')
    correct_answer = soup.find_all('span', class_='correct-answer')
    
    # got comments in form of array
    comments = soup.find_all('div', class_='comment-container')
    print(comments)
    
    

ExtractDataFromHTML()