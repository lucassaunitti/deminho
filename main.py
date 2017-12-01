import webapp2
import os
from google.appengine.ext.webapp import template #also added
from google.appengine.api import urlfetch

class ExternalChat(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'views/external.html')
        self.response.out.write(template.render(path, {}))

class Faq(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'views/faq.html')

class TestePage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'views/teste.html')
        self.response.out.write(template.render(path, {}))

class IndexPage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'views/index.html')
        self.response.out.write(template.render(path, {}))

app = webapp2.WSGIApplication([
    ('/external', ExternalChat),
    ('/faq', Faq),
    ('/teste', TestePage),
    ('/', IndexPage),
], debug=True)
