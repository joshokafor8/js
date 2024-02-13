let firstDate = null;
            const data = [];
            
            let check = true;
            function httpGetAsync(theUrl, callback) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() { 
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                        callback(xmlHttp.responseText);
                }
                xmlHttp.open("GET", theUrl, true); // true for asynchronous 
                xmlHttp.send(null);
            }
            httpGetAsync("https://x8ki-letl-twmt.n7.xano.io/api:1PGPBd6u/records", (res)=>{
                // console.log(res);

                let jsonData = JSON.parse(res);
                // console.log(jsonData);
                // let jsonData = res;
                // jsonData.sort((a, b) => new Date(a.date) - new Date(b.date));

                
                let sortedArr = jsonData.sort((a, b) => new Date(a.date) - new Date(b.date));

                
                
                

                sortedArr.forEach((item, index)=>{
                    if(check){
                        let inputDate = new Date(item['date'] + ' ' + item['time']);
                        firstDate = inputDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

                        
            
                        check = false;
                    }
                    let timechange = item['time'].replace(/am/g, ' AM').replace(/pm/g, ' PM')
                    let dateString = item['date'] + ' ' +timechange;
                    let carbonDate = new Date(dateString);

                    // Convert to milliseconds
                    let milliseconds = carbonDate.getTime();

                    // console.log(carbonDate);
                    let test = [milliseconds, item['value']];

                    // Assuming data is an array
                    data.push(test);
                    // console.log(index, item['date']);
                    // console.log(firstDate);
                });
                // console.log(data);

                let lastRecord = data[data.length - 1];
                lastRecord = lastRecord[1];
                // console.log(lastRecord);
                let currentDate = new Date();
                let today = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

                // console.log(today);

                let carbonDate = new Date();

                // Format the date as 'yyyy-mm-dd'
                let formattedDate = carbonDate.toISOString().split('T')[0];

                // console.log(formattedDate);
                // Subtracting today day from the date
                var count = 0;
                var allrecord = 0;
                sortedArr.forEach((item, index)=>{
                    let recordDate = item['date'];

                    if (recordDate === formattedDate) {
                        allrecord +=item['value'];
                        count++;
                    }
                });

                let todaypercent = 0;
                let todayavg = 0;
                if(allrecord){
                    todayavg = lastRecord - allrecord;
                    todaypercent = (lastRecord - allrecord) / allrecord;

                    todaypercent = todaypercent * 100;

                }
                

                // Subtracting 1 months from the date
                let m1MonthsDate = new Date();
                m1MonthsDate.setMonth(m1MonthsDate.getMonth() - 1);
                var testformattedDate = m1MonthsDate.toISOString().split('T')[0];

                var count = 0;
                var allrecord = 0;
                sortedArr.forEach((item, index)=>{
                    let recordDate = item['date'];
                    if (formattedDate >= recordDate && testformattedDate <= recordDate) {
                        allrecord +=item['value'];
                        count++;
                    }
                });

                let onemonthpercent = 0;
                let onemonthavg = 0;
                if(allrecord){
                    onemonthavg = lastRecord - allrecord;
                    onemonthpercent = (lastRecord - allrecord) / allrecord;

                    onemonthpercent = onemonthpercent * 100;

                }

                // Subtracting 6 months from the date

                let m6MonthsDate = new Date();
                m6MonthsDate.setMonth(m6MonthsDate.getMonth() - 6);
                var testformattedDate = m6MonthsDate.toISOString().split('T')[0];

                var count = 0;
                var allrecord = 0;
                sortedArr.forEach((item, index)=>{
                    let recordDate = item['date'];
                    if (formattedDate >= recordDate && testformattedDate <= recordDate) {
                        allrecord +=item['value'];
                        count++;
                    }
                });


                let sixmonthpercent = 0;
                let sixmonthavg = 0;
                if(allrecord){
                    sixmonthavg = lastRecord - allrecord;
                    sixmonthpercent = (lastRecord - allrecord) / allrecord;

                    sixmonthpercent = sixmonthpercent * 100;

                }

                // Subtracting 1 year from the date

                let y1YearDate = new Date();
                y1YearDate.setMonth(y1YearDate.getMonth() - 12);
                var testformattedDate = y1YearDate.toISOString().split('T')[0];

                var count = 0;
                var allrecord = 0;
                sortedArr.forEach((item, index)=>{
                    let recordDate = item['date'];
                    if (formattedDate >= recordDate && testformattedDate <= recordDate) {
                        allrecord +=item['value'];
                        count++;
                    }
                });

                let oneyearpercent = 0;
                let oneyearavg = 0;
                if(allrecord){
                    oneyearavg = lastRecord - allrecord;
                    oneyearpercent = (lastRecord - allrecord) / allrecord;

                    oneyearpercent = oneyearpercent * 100;

                }
                // Subtracting 1 ytd from the date

                let newtoday = new Date();
                let firstDayOfYear = new Date(newtoday.getFullYear(), 0, 1);
                var testformattedDate = firstDayOfYear.toISOString().split('T')[0];

                var count = 0;
                var allrecord = 0;
                sortedArr.forEach((item, index)=>{
                    let recordDate = item['date'];
                    if (formattedDate >= recordDate && testformattedDate < recordDate) {
                        allrecord +=item['value'];
                        count++;
                    }
                });

                let ytdpercent = 0;
                let ytdavg = 0;
                if(allrecord){
                    ytdavg = lastRecord - allrecord;
                    ytdpercent = (lastRecord - allrecord) / allrecord;
                    ytdpercent = ytdpercent * 100;

                }

                 // Subtracting all record from the date
                 var count = 0;
                var allrecord = 0;
                sortedArr.forEach((item, index)=>{
                    allrecord +=item['value'];
                        count++;
                });

                let allpercent = 0;
                let allavg = 0;
                if(allrecord){
                    allavg = lastRecord - allrecord;
                    allpercent = (lastRecord - allrecord) / allrecord;
                    allpercent = allpercent * 100;

                }


                // data append sec

                // document.getElementById("todayRecord").innerHTML = "$ "+lastRecord;

                let text = `<h1>$${lastRecord}</h1>`;
                if(allpercent > 0){
                    text+=`<span class="postive span_avg" id="all_span"> <span>${allpercent.toFixed(2)}%</span>  <span>${allavg.toFixed(2)}</span></span>`;
                }else {
                    text+=`<span class="neg span_avg" id="all_span"> <span>${allpercent.toFixed(2)}%</span>  <span>${allavg.toFixed(2)}</span></span>`;
                }


                if(ytdpercent > 0){
                    text+=`<span class="postive span_avg hide" id="ytd_span"> <span>${ytdpercent.toFixed(2)}%</span>  <span>${ytdavg.toFixed(2)}</span></span>`;
                }else {
                    text+=`<span class="neg span_avg hide" id="ytd_span"> <span>${ytdpercent.toFixed(2)}%</span>  <span>${ytdavg.toFixed(2)}</span></span>`;
                }

                if(oneyearpercent > 0){
                    text+=`<span class="postive span_avg hide" id="oneyear_span"> <span>${oneyearpercent.toFixed(2)}%</span>  <span>${oneyearavg.toFixed(2)}</span></span>`;
                }else {
                    text+=`<span class="neg span_avg hide" id="oneyear_span"> <span>${oneyearpercent.toFixed(2)}%</span>  <span>${oneyearavg.toFixed(2)}</span></span>`;
                }

                if(sixmonthpercent > 0){
                    text+=`<span class="postive span_avg hide" id="sixmonth_span"> <span>${sixmonthpercent.toFixed(2)}%</span>  <span>${sixmonthavg.toFixed(2)}</span></span>`;
                }else {
                    text+=`<span class="neg span_avg hide" id="sixmonth_span"> <span>${sixmonthpercent.toFixed(2)}%</span>  <span>${sixmonthavg.toFixed(2)}</span></span>`;
                }

                if(onemonthpercent > 0){
                    text+=`<span class="postive span_avg hide" id="onemonth_span"> <span>${onemonthpercent.toFixed(2)}%</span>  <span>${onemonthavg.toFixed(2)}</span></span>`;
                }else {
                    text+=`<span class="neg span_avg hide" id="onemonth_span"> <span>${onemonthpercent.toFixed(2)}%</span>  <span>${onemonthavg.toFixed(2)}</span></span>`;
                }

                if(todaypercent > 0){
                    text+=`<span class="postive span_avg hide" id="oneday_span"> <span>${todaypercent.toFixed(2)}%</span>  <span>${todayavg.toFixed(2)}</span></span>`;
                }else {
                    text+=`<span class="neg span_avg hide" id="oneday_span"> <span>${todaypercent.toFixed(2)}%</span>  <span>${todayavg.toFixed(2)}</span></span>`;
                }
                document.getElementById("todayRecord").innerHTML = text;
                // console.log(text);

                let checktoday = new Date();

                let optionss = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
                };

                // Format the date
                let checkformattedDate = checktoday.toLocaleString('en-US', optionss);

                document.getElementById("comp_today_date").innerHTML = checkformattedDate;

                // console.log(checkformattedDate);



                let todaydate = new Date();

                    // Format the date as 'dd M yyyy'
                    todaydate = todaydate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });


                    let mm1MonthsDate = new Date();
                    mm1MonthsDate.setMonth(mm1MonthsDate.getMonth() - 1);
                    let minus1MonthsDate = mm1MonthsDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });


                    let mm6MonthsDate = new Date();
                    mm6MonthsDate.setMonth(mm6MonthsDate.getMonth() - 6);
                    let minus6MonthsDate = mm6MonthsDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });


                    let m12MonthsDate = new Date();
                        m12MonthsDate.setMonth(m12MonthsDate.getMonth() - 12);
                    let oneYearDate = m12MonthsDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

                    let mnewtoday = new Date();
                            let mfirstDayOfYear = new Date(mnewtoday.getFullYear(), 0, 1);
                            var ytdstartdate = mfirstDayOfYear.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

                    // console.log(ytdstartdate);
                    // console.log(firstDate);
                var options = {
                                series: [{
                                data: data
                                }],
                                chart: {
                                id: 'area-datetime',
                                type: 'area',
                                height: 350,
                                toolbar: {
                                    show: false,
                                },
                                zoom: {
                                    autoScaleYaxis: true
                                }
                                },
                                annotations: {
                                yaxis: [{
                                    y: 0,
                                    borderColor: '#999',
                                    label: {
                                    show: false,
                                    text: 'Support',
                                    style: {
                                        color: "#fff",
                                        background: '#00E396'
                                    }
                                    }
                                }],
                                xaxis: [{
                                    x: 0,
                                    borderColor: '#999',

                                    yAxisIndex: 0,
                                    label: {
                                    show: false,
                                    text: '',
                                    style: {
                                        color: "#fff",
                                        background: '#775DD0'
                                    }
                                    }
                                }]
                                },
                                dataLabels: {
                                enabled: false
                                },
                                markers: {
                                size: 0,
                                style: 'hollow',
                                },
                                xaxis: {
                                type: 'datetime',
                                min: new Date(firstDate).getTime(),
                                tickAmount: 6,

                                },
                                tooltip: {
                                x: {
                                    format: 'dd MMM yyyy HH:mm:ss'
                                },
                                y: {
                                    formatter: function(val) {
                                        return "$"+val
                                    },
                                    title: {
                                        formatter: function (seriesName) {
                                        return "Value"
                                        }
                                    }
                                    }
                                },
                                fill: {
                                type: 'gradient',
                                gradient: {
                                    shadeIntensity: 1,
                                    opacityFrom: 0.7,
                                    opacityTo: 0.9,
                                    stops: [0, 100]
                                }
                                },
                                };

                                var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
                                chart.render();


                                var resetCssClasses = function(activeEl) {
                                var els = document.querySelectorAll('button')
                                Array.prototype.forEach.call(els, function(el) {
                                el.classList.remove('active')
                                })

                                activeEl.target.classList.add('active')
                            }


                            var percentageGet = function(activeEl) {
                                var els = document.querySelectorAll('.span_avg')
                                Array.prototype.forEach.call(els, function(el) {
                                el.classList.add('hide')
                                })
                                var element = document.getElementById(activeEl);
                                element.classList.remove('hide')
                            }

                            document
                                .querySelector('#one_month')
                                .addEventListener('click', function(e) {
                                resetCssClasses(e);
                                percentageGet('onemonth_span');

                                chart.zoomX(
                                    new Date(minus1MonthsDate).getTime(),
                                    new Date(todaydate).getTime()
                                )
                                })

                                document
                                .querySelector('#one_day')
                                .addEventListener('click', function(e) {
                                resetCssClasses(e);
                                percentageGet('oneday_span');
                                chart.zoomX(
                                    new Date(todaydate).getTime(),
                                    new Date(todaydate).getTime()
                                )
                                })

                            document
                                .querySelector('#six_months')
                                .addEventListener('click', function(e) {
                                resetCssClasses(e);
                                percentageGet('sixmonth_span');

                                chart.zoomX(
                                    new Date(minus6MonthsDate).getTime(),
                                    new Date(todaydate).getTime()
                                )
                                })

                            document
                                .querySelector('#one_year')
                                .addEventListener('click', function(e) {
                                resetCssClasses(e);
                                percentageGet('oneyear_span');
                                chart.zoomX(
                                    new Date(oneYearDate).getTime(),
                                    new Date(todaydate).getTime()
                                )
                                })

                            document.querySelector('#ytd').addEventListener('click', function(e) {
                                resetCssClasses(e);
                                percentageGet('ytd_span');
                                chart.zoomX(
                                new Date(ytdstartdate).getTime(),
                                new Date(todaydate).getTime()
                                )
                            })

                            document.querySelector('#all').addEventListener('click', function(e) {
                                resetCssClasses(e);
                                percentageGet('all_span');
                                chart.zoomX(
                                new Date(firstDate).getTime(),
                                new Date(todaydate).getTime()
                                )
                            })

            });


       
