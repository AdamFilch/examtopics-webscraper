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
Test command BRuh
