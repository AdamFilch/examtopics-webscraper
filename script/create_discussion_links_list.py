import urllib.request
from bs4 import BeautifulSoup


def GetDiscussionLinks(page: int, provider: str):
    url = "https://www.examtopics.com/discussions/" + provider + "/" + str(page) + "/"
    print('DiscussionLinks', url)

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    req = urllib.request.Request(url, headers=headers)
    
    try:
        res = urllib.request.urlopen(req).read()
        html_content = res.decode('utf-8')
            
        soup = BeautifulSoup(html_content, "html.parser")
        
        disucssion_list = soup.find_all('div', class_='dicussion-title-container')
        
        links_and_title = []
        for discussion in disucssion_list:

            res = {
                "link": discussion.find('a', href=True)['href'],
                "title": discussion.find('h2').text.strip()
            }
            links_and_title.append(res)
            
        
        
        return links_and_title
    except urllib.error.HTTPError as e:
        print(f"HTTP Error: {e.code}")
    except urllib.error.URLError as e:
        print(f"URL Error: {e.reason}")
        
        
GetDiscussionLinks(1, 'amazon')