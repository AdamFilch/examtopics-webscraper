from bs4 import BeautifulSoup
import json


WRITE_INTO_FILE = "EXAMPLE_QUESTION_DUMP.json"


def ExtractDataFromHTML():
    # html = open('TEST_HTML.txt')
    with open('TEST_HTML2.txt', 'r', encoding="cp850") as file:
        html = file.read()
    soup = BeautifulSoup(html, "html.parser")
    
    # get the respective question, option and answers
    question_body = soup.find_all('div', class_='question-body')
    question = [p.text.strip() for p in soup.find_all('p', class_='card-text')]
    correct_answer = [span.text.strip() for span in soup.find_all('span', class_='correct-answer')]
    question_no = soup.find_all('div', class_="question-discussion-header")
    
    for div in question_no:
        short = div.find_all('div')
    question_and_topic = [t.text.replace("\n", " ").replace("\t", " ") for t in short]
    questionNumber_and_answer = short[0].text.replace("\n", " ").replace("\t", "").split(' ')
    
    
    # Extract multiple choice items
    multi_choice_items = soup.find_all("li", class_="multi-choice-item")

    # Remove <span> from each <li>
    for li in multi_choice_items:
        span = li.find('span', class_='multi-choice-letter')
        if span:
            span.decompose()  # Remove the <span> tag completely
            
    multi_choice = [li.text.replace("\n", " ").replace("\t", " ").strip() for li in multi_choice_items]
    
    
    # got comments in form of array
    comments = soup.find_all('div', class_='comment-container')
    
    
    
    # Append question and answers to json file
    #Create Python Object (Dictionary) to turn into JSON
    question_object = [{
        "questionNo": questionNumber_and_answer[3],
        "topic": questionNumber_and_answer[6],
        "question": question[0],
        "choices": multi_choice,
        "answer": correct_answer[0].split(),
        "comments": []
    }]
    
    try: 
        # Save the HTML content to a text file
        with open("./dumps/" + WRITE_INTO_FILE, 'w',  encoding='utf-8') as f:  # Use 'w' to overwrite the file, and specify encoding
             json.dump(question_object, f, ensure_ascii=False, indent=4)

        print("HTML content SUCCESSFULLY written to " + WRITE_INTO_FILE)
    except Exception as e: 
        print(e)
    
    # print(question_and_topic)
    
    
    

ExtractDataFromHTML()