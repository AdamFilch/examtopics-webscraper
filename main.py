import json
from script.scraper import Scraper
from script.extract import ExtractDataFromHTML
from time import sleep

WRITE_INTO_FILE = "EXAMPLE_QUESTION_DUMP.json"

def delay(exp = 0): 
    sleep(5 + exp)


def main():
    res = []
    
    
    proceed = True
    count = 1 # Keep track how many rounds of prints
    exp_backoff = 0 
    
    while proceed:
        # scraped_html = Scraper() # Do not run yet dont get banned dumbass
        with open('TEST_HTML.txt', 'r', encoding="cp850") as file:
            scraped_html = file.read()
        question_object = ExtractDataFromHTML(html=scraped_html)
        
        
        # If question Object is a valid object APPEND to res
        res.append(question_object)
        
        # Else add another 30 seconds to exponential backoff to increase delay hopefully to not get banned
        print('Round Count :' + str(count)) 
        delay()
        
        # But there would be a situation where the object is not valid not because an error page is encountered but just a random page that isnt a question page
        
        
        count += 1    
        if count == 5:
            proceed = False
    
    try: 
        # Save the HTML content to a text file
        with open("dumps/" + WRITE_INTO_FILE, 'w',  encoding='utf-8') as f:  # Use 'w' to overwrite the file, and specify encoding
             json.dump(res, f, ensure_ascii=False, indent=4)

        print("HTML content SUCCESSFULLY written to " + WRITE_INTO_FILE)
    except Exception as e: 
        print(e)
    
    
main()