const axios = require('axios');
const FormData = require('form-data');

class Api {
  constructor(projectKey) {
    this.projectKey = projectKey;
    axios.defaults.baseURL = 'https://api.cumulus.tophat.cloud';
  }

  async registerKey(domain) {
    const data = new FormData();
    data.append('project_id', this.projectKey);
    data.append('domain', domain);

    axios.patch('/project/enroll', data, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      }
    });
  }

  async createThunder(name, url, priority, details) {
    const data = new FormData();
    data.append('project', this.projectKey);
    data.append('thunder_name', name);
    data.append('url', url);
    data.append('priority', priority);
    data.append('details', details);

    axios.post('/thunder/create', data, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      }
    });
  }
}

module.exports = Api;
