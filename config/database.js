var secrets = require('../secrets.js')
module.exports = {
  'url' : 'mongodb://werethylacine:' + secrets.mongoCluster.pw + '@tutorialcluster-shard-00-00-xhwdx.mongodb.net:27017,tutorialcluster-shard-00-01-xhwdx.mongodb.net:27017,tutorialcluster-shard-00-02-xhwdx.mongodb.net:27017/users?ssl=true&replicaSet=TutorialCluster-shard-0&authSource=admin'
}
