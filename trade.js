<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Chart graph</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">


        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
            .toolbar {
                margin-left: 45px;
            }
            .toolbar button {
                background: #fff;
                color: #222;
                border: 1px solid #e7e7e7;
                border-bottom: 2px solid #ddd;
                border-radius: 2px;
                padding: 4px 17px;
            }
            button.active {
                color: #fff;
                background: #008FFB;
                border: 1px solid blue;
                border-bottom: 2px solid blue;
            }
            .record_show {
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem
            }
            .record_show h1 {
                font-size: 26px;
                font-family: sans-serif;
                font-weight: 500;
                line-height: 1.4;
                color: #000;
            }
            .record_show span {
                font-size: 16px;
                padding: 4px 12px;

                border-radius: 12px;
                font-weight: 600;


            }
            .record_show span.postive span:last-child {
                color: #34a853;
            }
            .record_show span.neg span:last-child {
                color: #b8370e;
            }
            .record_show span.postive span:first-child {
                color: #34a853;
                background: #e6f4ea;
            }
            .record_show span.neg span:first-child {
                color: #b8370e;
                background: #fce8e6;
            }
            .record_show .hide{
                display: none;
            }
            .main_head {
                font-size: 26px;
    font-weight: 400;
    line-height: 1.5;
            }
            h3 {
                font-size: 13px;
    font-weight: 600;
    color: gray;
            }
        </style>
    </head>
    <body>
        <div class="container mt-5">
            <div class="row justify-content-center">

                <div class="col-md-7 mt-3">
                    <h1 class="main_head">Vanguard Real Estate Index Fund ETF
                    </h1>
                    <div class="record_show" id="todayRecord">
                       
                    </div>
                   
                    <h3 id="comp_today_date"></h3>
                    <div class="toolbar">
                        <button id="one_day" class="">
                            1D
                          </button>
                        <button id="one_month" class="">
                          1M
                        </button>

                        <button id="six_months" class="">
                          6M
                        </button>

                        <button id="one_year" class="">
                          1Y
                        </button>

                        <button id="ytd" class="">
                          YTD
                        </button>

                        <button id="all" class="active">
                          ALL
                        </button>
                      </div>
                    <div id="chart-timeline"></div>
                </div>
            </div>


        </div>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/gh/joshokafor8/js@latest/trader.js"></script> 
        


       

    </body>
</html>
