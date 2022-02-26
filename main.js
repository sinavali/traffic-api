const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


axios.defaults.headers.apikey = 'A56ED6598FF889246BCE6F54433923';

app.post('/apple', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})
app.post('/login', (req, res) => {
    console.log(req.body);
    // axios.post('http://192.168.1.66/api/User/Login', {
    //     IMEI: req.body.IMEI,
    //     NationalCode: req.body.NationalCode
    // }).then(response => {
    //     res.json(response.data);
    // }).catch(error => {
    //     res.json(error);
    // });
})

app.get('/Enter', (req, res) => {
    axios.post('http://192.168.1.66/api/Enter', {
        appVersion: req.body.appVersion,
        deviceKind: req.body.deviceKind,
        deviceVersion: req.body.deviceVersion,
        imie: req.body.imie,
        macAddr: req.body.macAddr,
        placmentId: req.body.placmentId,
        qrcode: req.body.qrcode,
        point: req.body.point,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/Exit', (req, res) => {
    axios.post('http://192.168.1.66/api/Exit', {
        appVersion: req.body.appVersion,
        deviceKind: req.body.deviceKind,
        deviceVersion: req.body.deviceVersion,
        imie: req.body.imie,
        macAddr: req.body.macAddr,
        placmentId: req.body.placmentId,
        qrcode: req.body.qrcode,
        point: req.body.point,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/StartMission', (req, res) => {
    axios.post('http://192.168.1.66/api/StartMission', {
        appVersion: req.body.appVersion,
        deviceKind: req.body.deviceKind,
        deviceVersion: req.body.deviceVersion,
        imie: req.body.imie,
        macAddr: req.body.macAddr,
        placmentId: req.body.placmentId,
        qrcode: req.body.qrcode,
        point: req.body.point,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/EndMission', (req, res) => {
    axios.post('http://192.168.1.66/api/EndMission', {
        appVersion: req.body.appVersion,
        deviceKind: req.body.deviceKind,
        deviceVersion: req.body.deviceVersion,
        imie: req.body.imie,
        macAddr: req.body.macAddr,
        placmentId: req.body.placmentId,
        qrcode: req.body.qrcode,
        point: req.body.point,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/GetPlacement', (req, res) => {
    axios.post('http://192.168.1.66/api/GetPlacement', {
        IMEI: req.body.IMEI,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/GetLogs', (req, res) => {
    axios.post('http://192.168.1.66/api/GetLogs', {
        IMEI: req.body.IMEI,
        placementId: req.body.placementId,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/GetLeaveKind', (req, res) => {
    axios.post('http://192.168.1.66/api/GetLeaveKind', {
        IMEI: req.body.IMEI,
        user_ids: req.body.user_ids,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/GetLeaveRequest', (req, res) => {
    axios.post('http://192.168.1.66/api/GetLeaveRequest', {
        IMEI: req.body.IMEI,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        parentId: req.body.parentId,
        leaveKind: req.body.leaveKind,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/GetLeaveRequest', (req, res) => {
    axios.post('http://192.168.1.66/api/LeaveRequestRemove', {
        IMEI: req.body.IMEI,
        id: req.body.id,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/CheckValidVersion', (req, res) => {
    axios.post('http://192.168.1.66/api/CheckValidVersion', {
        appVersion: req.body.appVersion,
        applicationId: req.body.applicationId,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/LeaveRequestSelectAllForAccept', (req, res) => {
    axios.post('http://192.168.1.66/api/LeaveRequestSelectAllForAccept', {
        IMEI: req.body.IMEI,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        leaveKindParent: req.body.leaveKindParent,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/GetPersonImage', (req, res) => {
    axios.post('http://192.168.1.66/api/GetPersonImage', {
        IMEI: req.body.IMEI,
        listPersonId: req.body.listPersonId,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/GetLeaveRequestImage', (req, res) => {
    axios.post('http://192.168.1.66/api/GetLeaveRequestImage', {
        IMEI: req.body.IMEI,
        id: req.body.id,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/LeaveRequestChangeStatus', (req, res) => {
    axios.post('http://192.168.1.66/api/LeaveRequestChangeStatus', {
        IMEI: req.body.IMEI,
        id: req.body.id,
        status: req.body.status,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/Attendees', (req, res) => {
    axios.post('http://192.168.1.66/api/Attendees', {
        IMEI: req.body.IMEI,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/TracingPointList', (req, res) => {
    axios.post('http://192.168.1.66/api/TracingPointList', {
        IMEI: req.body.IMEI,
        personId: req.body.personId,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/ListTracingPoint', (req, res) => {
    axios.post('http://192.168.1.66/api/ListTracingPoint', {
        IMEI: req.body.IMEI,
        functionLogId: req.body.functionLogId,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/ListFunctionLog', (req, res) => {
    axios.post('http://192.168.1.66/api/ListFunctionLog', {
        IMEI: req.body.IMEI,
        personId: req.body.personId,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/FunctionLogSummery', (req, res) => {
    axios.post('http://192.168.1.66/api/FunctionLogSummery', {
        IMEI: req.body.IMEI,
        personId: req.body.personId,
        year: req.body.year,
        month: req.body.month,
        date: req.body.date,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/LastTracingPoint', (req, res) => {
    axios.post('http://192.168.1.66/api/LastTracingPoint', {
        IMEI: req.body.IMEI,
        personId: req.body.personId,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.get('/FunctionLogTracing', (req, res) => {
    axios.post('http://192.168.1.66/api/FunctionLogTracing', {
        appVersion: req.body.appVersion,
        deviceKind: req.body.deviceKind,
        deviceVersion: req.body.deviceVersion,
        imie: req.body.imie,
        macAddr: req.body.macAddr,
        placmentId: req.body.placmentId,
        qrcode: req.body.qrcode,
        point: req.body.point,
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    });
})

app.listen(80, function () {
    console.log("done: 80")
})