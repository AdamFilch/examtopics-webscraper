# This file evaluates with the result of the page or the result of the object is a valid question_object/question_page
from fuzzywuzzy import fuzz



def FuzzChecker(exam_title, exam_name):
    fuzz_ratio = fuzz.partial_ratio(exam_title, exam_name)
    return fuzz_ratio