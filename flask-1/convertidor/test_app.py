from app import app
from unittest import TestCase

class ConvertViewsTestCase(TestCase):
  def test_convert_form(self):
    with app.test_client() as client:
      res = client.get('/form/') 
      html = res.get_data(as_text=True)

      self.assertEqual(res.status_code,200)

 
