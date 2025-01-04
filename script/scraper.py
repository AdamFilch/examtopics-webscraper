import urllib.request


def Scraper(): 
    url = "https://www.examtopics.com/discussions/amazon/view/103521-exam-aws-certified-developer-associate-dva-c02-topic-1/"

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
        with open('TEST_HTML.txt', 'w', encoding='utf-8') as f:  # Use 'w' to overwrite the file, and specify encoding
            f.write(html_content)

        print("HTML content successfully written to TEST_HTML.txt")
    except urllib.error.HTTPError as e:
        print(f"HTTP Error: {e.code}")
    except urllib.error.URLError as e:
        print(f"URL Error: {e.reason}")
        
        
Scraper()