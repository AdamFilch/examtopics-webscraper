# examtopics-webscraper


Example Exams
- /exams/amazon/aws-certified-developer-associate-dva-c02

safasd
Questions will be written in format below
```
[
    {
        "exam_name" : ""
        "questionNo": "",
        "topic": "",
        "question": "",
        "choices": [
            "",
            "",
            "",
            "",
            ""
        ],
        "answer": "",
        "comments": [
            {
                "user": "",
                "selected": "",
                "comment": "",
                "comments": []
            }
        ]
    }
]
```


After every round, the runs are saved into /dumps/runs
this is to keep track of details such as
- How many successful scrape
- How many of those successful scrape resulted in a question
- How many other questions/exam/etc were encountered
- How many error pages encountered
- How long did the program run for


in the form of
```
{
    program_start_date: '',
    program_end_date: '',
    duration: '',
    total_bans: '',
    longest_delay: '',
    scrape_data: {
        total_successful_scrape: '',
        total_questions: '',
        total_unused_questions: '',
        total_error_pages
    }
}
```

To run the python server, create first the python virtual environment, by `virtual venv` then install from requirements.txt `pip install -r 'requirements.txt'` then run `venv\Scripts\python server.py`


To run the python scripts run `py main.py`, make sure you are in your virtual environment with  `

If you added more python libraries be sure the libraries are added to requirements, `pip freeze > requirements.txt` this command automatically adds from your venv
