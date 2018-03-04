
* git clone https://github.com/ferhat-hajdarpasic/airtracker-brochure.git
* az webapp deployment source config-local-git --name airtracker-brochure --resource-group airtracker-brochure  --output tsv
* https://airtracker-brochure@airtracker-brochure.scm.azurewebsites.net/airtracker-brochure.git
* cd airtracker-brochure/
* git remote add azure https://airtracker-brochure@airtracker-brochure.scm.azurewebsites.net/airtracker-brochure.git
* git push azure master
