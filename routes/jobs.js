'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const { Jobs } = require('../models/jobs');

const router = express.Router();

const jsonParser = bodyParser.json();

// GET

router.get("/", jsonParser, (req, res) => {
    Job
      .find()
      .then(jobs => {
        res.json({
          jobs: jobs.map((jobs) => job.serialize())
        });
      })
      .catch(
        err => {
          console.error(err);
          res.status(500).json({
            message: "Internal server error"
          });
        });
  });


