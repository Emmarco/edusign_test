
const { request } = require('express')
const express = require('express')
// const DB = require("./db.json")
const app = express()
const port = 6272

var DB = {
    "attendanceSheet": {
        "ID": 7817231,
        "NAME": "Test technique",
        "STUDENTS": [
            {
                "id": 1,
                "presenceState": true,
                "signatureTimestamp": null,
                "signature": null,
                "comment": "",
                "dateCreated": "2023-01-24T10:58:13.000Z",
                "dateUpdated": "2023-01-24T10:58:13.000Z",
                "FIRSTNAME": "François",
                "LASTNAME": "Paulus"
            },
            {
                "id": 2,
                "presenceState": false,
                "delay": 0,
                "signatureTimestamp": null,
                "signature": null,
                "comment": "",
                "dateCreated": "2023-01-24T10:58:13.000Z",
                "dateUpdated": "2023-01-24T10:58:13.000Z",
                "FIRSTNAME": "Anthony",
                "LASTNAME": "Pigier"
            },
            {
                "id": 3,
                "presenceState": false,
                "delay": 0,
                "signatureTimestamp": null,
                "signature": null,
                "comment": "",
                "dateCreated": "2023-01-24T10:58:13.000Z",
                "dateUpdated": "2023-01-24T10:58:13.000Z",
                "EDITED": false,
                "FIRSTNAME": "Rachid",
                "LASTNAME": "Rabiah"
            },
            {
                "id": 4,
                "presenceState": false,
                "delay": 0,
                "signatureTimestamp": null,
                "signature": null,
                "comment": "",
                "dateCreated": "2023-01-24T10:58:13.000Z",
                "dateUpdated": "2023-01-24T10:58:13.000Z",
                "FIRSTNAME": "Olivier",
                "LASTNAME": "Rameil"
            }
        ],
        "START": "2023-01-24T11:00:00.000Z",
        "END": "2023-01-24T13:00:00.000Z",
        "DATE_CREATED": "2023-01-24T10:58:13.000Z",
        "DATE_UPDATED": "2023-01-24T10:58:13.000Z"
    }
}



function changeDateNow(index,created=false){
    let d = new Date()
    let ds = d.toISOString()
    DB.attendanceSheet.STUDENTS[index].dateUpdated = ds
    if(created)DB.attendanceSheet.STUDENTS[index].dateCreated = ds
    DB.attendanceSheet.DATE_UPDATED = ds
}

app.get('/', (req, res) => {
  res.send('serveur test technique ')
})


app.get("/apprenants", (req, res) => {
    res.status(200).json(DB.attendanceSheet.STUDENTS);
  });
  
app.get("/apprenants/:id", (req, res) => {
    if(isNaN(req.params.id))res.status(400).send("Mauvaise URL")
    else{
        res
        .status(200)
        .json({ data: DB.attendanceSheet.STUDENTS.find((a) => a.id == req.params.id) });
    }
  });
app.put("/apprenants/:id", (req, res) => {
    if(isNaN(req.params.id))res.status(400).send("Mauvaise URL")
    else{
        let indexApprenant = DB.attendanceSheet.STUDENTS.findIndex((a) => a.id == req.params.id)
        if (!indexApprenant)res.status(404).send("Ressource non trouvée")
        else{
            const body = request.body
            if(body?.commentaire){
                DB.attendanceSheet.STUDENTS[indexApprenant].commentaire = body.commentaire
                changeDateNow(indexApprenant)
            }
            if(body.hasOwnProperty('presenceState') && typeof(presenceState)==typeof(true)){
                DB.attendanceSheet.STUDENTS[indexApprenant].presenceState = body.presenceState
                changeDateNow(indexApprenant)
            }
            res.status(201).json(DB.attendanceSheet.STUDENTS[indexApprenant])
        }
    }
  });
  app.put("/apprenants/:id/signature", (req, res) => {
    if(isNaN(req.params.id))res.status(400).send("Mauvaise URL")
    else{
        let indexApprenant = DB.attendanceSheet.STUDENTS.findIndex((a) => a.id == req.params.id)
        if (!indexApprenant)res.status(404).send("Ressource non trouvée")
        else{
            const body = request.body
            if(bo)
            DB.attendanceSheet.STUDENTS[indexApprenant].presenceState = true
            DB.attendanceSheet.STUDENTS[indexApprenant].signature = true
            DB.attendanceSheet.STUDENTS[indexApprenant].
            changeDateNow()
        }
    }
  });

  app.get(/.*/, (req, res) => {
    res.status(404).send('Nope 404')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
