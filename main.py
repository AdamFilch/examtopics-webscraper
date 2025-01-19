import json
from script.create_discussion_links_list import GetDiscussionLinks
from script.scraper import Scraper
from script.extract import ExtractDataFromHTML
from time import sleep
from fuzzywuzzy import fuzz
import random
import os


WRITE_INTO_FILE = "EXAMPLE_QUESTION_DUMP.json"

def delay(exp = 0): 
    sleep(5 + exp)

def main(exam_name: str, provider: str, scrape_method: str):
    
    if provider == '':
        return
    
    res = []
    proceed = True
    page_num = 1
    
    if not os.path.exists('dumps/exam_papers/' + exam_name + '.json'):
        with open('dumps/exam_papers/' + exam_name + '.json', 'w'): pass
    else:
        with open('dumps/exam_papers/' + exam_name + '.json', 'r') as file:
            res = json.load(file)
    
    print(res)
    
    while proceed:
        exam_links_list = GetDiscussionLinks(page_num, provider)
        sleep(random.uniform(3,5))
        for exam_link in exam_links_list:
            fuzz_ratio = fuzz.partial_ratio(exam_link['title'], exam_name)
            if (fuzz_ratio > 94): 
                try: 
                    scraped_html = Scraper(exam_link)
                    
                    question_object = ExtractDataFromHTML(scraped_html)
                    
                    question_object['link'] = exam_link['link']
                    question_object['title'] = exam_link['title']
                    
                    res.append(question_object)
                    
                    with open('dumps/exam_papers/' + exam_name  +'.json', 'w', encoding='utf-8') as f:
                        json.dump(res, f, ensure_ascii=False, indent=4)

                except Exception as e:
                    print(f"URL Error: {e.reason}")
                sleep(random.uniform(4,10))
        
        page_num += 1
        if (page_num == 10):
            proceed = False
            
            
            
scrape_details = {
    "exam_name": 'AWS Certified Cloud Practitioner CLF-C02',
    "provider": 'Amazon',
    "scrape_method": '',
}


main(**scrape_details)