# install both using pip install lxml and pip install requests
from lxml import html
import requests

# next we will use requests.get to retrieve the web page with our data, parse it using the html module, and save the results in result:
page = requests.get('https://pwn2win.lbherrera.me/')
result = html.fromstring(page.content)
# obs: we need to use page.content rather than page.text because html.fromstring implicitly expects bytes as input

# result now contains the whole HTML file in a nice tree structure which we can go over two different ways:
# XPath and CSSSelect. I'm going to use XPath.

# XPath is a way of locating information in structured documents such as HTML or XML documents

# I'm using Chrome, so I can right click an element, choose ‘Inspect element’, highlight the code, right click again, and choose ‘Copy XPath’
# which is: //*[@id="secret"]

flag = result.xpath('//font[@id="secret"]/text()')

# print ('Flag: ', flag)

from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('https://malucart.github.io/xss/index.html', flag=flag)

if __name__ == "__main__":
    app.run(debug=True);
