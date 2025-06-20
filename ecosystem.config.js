module.exports = {
    apps : [{
      name   : "RELATOS_PAPEL",
      script : "dist/main.js",
      env_prod:{
        NODE_ENV: "prod"
      },
      env_dev:{
        NODE_ENV: "dev"
      },
      env_qa:{
        NODE_ENV: "qa"
      }
    },
  ]
  }
  