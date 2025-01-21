import json
from script.create_discussion_links_list import GetDiscussionLinks
from script.scraper import Scraper
from script.extract import ExtractDataFromHTML
from time import sleep
import random
import os
import sys
from difflib import SequenceMatcher

WRITE_INTO_FILE = "EXAMPLE_QUESTION_DUMP.json"

def delay(exp = 0): 
    sleep(5 + exp)

def main(exam_name: str, exam_code: str, provider: str, scrape_method: str):
    
    if provider == '':
        return
    
    res = []
    proceed = True
    page_num = 1
    scraped_question = 0
    
    if not os.path.exists('dumps/exam_papers/' + exam_name + '.json'):
        with open('dumps/exam_papers/' + exam_name + '.json', 'w'): pass
    else:
        with open('dumps/exam_papers/' + exam_name + '.json', 'r') as file:
            try:
                res = json.load(file)
            except json.JSONDecodeError:
                res = [] 
    
    print(res)
    
    while proceed:
        exam_links_list = GetDiscussionLinks(page_num, provider)
        sleep(random.uniform(3,5))
        for exam_link in exam_links_list:
            fuzz_ratio_name = SequenceMatcher(None, exam_link['title'], exam_name).ratio()*100
            fuzz_ratio_code = SequenceMatcher(None, exam_link['title'], exam_code).ratio()*100
            print(f"Exam Link: {exam_link['title']}, ExamTitle: {exam_code}, Similarity: {fuzz_ratio_name}")
            if (fuzz_ratio_code > 70): 
                try: 
                    scraped_html = Scraper(exam_link)
                    
                    question_object = ExtractDataFromHTML(scraped_html)
                    
                    question_object['link'] = exam_link['link']
                    question_object['title'] = exam_link['title']
                    
                    res.append(question_object)
                    scraped_question += 1
                    
                    with open('dumps/exam_papers/' + exam_name  +'.json', 'w', encoding='utf-8') as f:
                        json.dump(res, f, ensure_ascii=False, indent=4)

                except Exception as e:
                    print(f"URL Error: {e.reason}")
                sleep(random.uniform(4,10))
        
        page_num += 1
        if (page_num == 10):
            proceed = False
            
            
            
scrape_details = {"exam_name": 'AWS Certified Data Engineer - Associate DEA-C01', "exam_code": 'AWS Certified Data Engineer - Associate DEA-C01', "provider": 'Amazon', "scrape_method": "16"}

if __name__ == '__main__':
    # Read the JSON string passed from Flask
    # scrape_details = json.loads(sys.argv[1])
    
    print(scrape_details)

    # Call the main function with unpacked arguments    
    main(**scrape_details)