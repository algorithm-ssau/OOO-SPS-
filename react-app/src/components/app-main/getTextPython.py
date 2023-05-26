import requests

def get_text():
    url = 'https://loripsum.net/api/1/short'
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        return None