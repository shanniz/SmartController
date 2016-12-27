/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    state : 'OFF',
    serverUrl: 'http://192.168.0.102/LED=',
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        alert('sadf');
        ///once
        //setTimeout(function(){ alert("Hello"); }, 5000);
        //repeating execution after every delay microseconds
        var cb = function(res){console.log(res);};
        
        //var i = 1;
        //var timer = setInterval(function() { alert(i++) }, 2000);
        //setInterval(this.httpGetAsync('http://192.168.0.102/LED=OFF', cb), 2000);
        setInterval(this.httpGetAsync, 5000);
        ///setTimeout(this.httpGetAsync, 5000);
        //////setTimeout(this.httpGetAsync('http://192.168.0.102/LED=OFF', cb), 10000);
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('controllerMain', this.onDeviceReady, false);
    },

    httpGetAsync: function(theUrl, callback){
        this.state = this.state == 'ON'? 'OFF':'ON';
        theUrl = 'http://192.168.0.102/LED=' + this.state;
        console.log(theUrl);

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                //callback(xmlHttp.responseText);
                //callback(xmlHttp);
            }
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        ////app.receivedEvent('deviceready');
        alert('dev ready');
        this.initButtonControlls();
    },
    
    initButtonControlls: function(){
        var btnOn = document.getElementById('btnOn');
        var btnOff = document.getElementById('btnOff');
        btnOn.onclick = function(){ alert('cliked On'); }
        btnOff.onclick = function(){ alert('cliked Off'); }
    }

    /*// Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};

app.initialize();