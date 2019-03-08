let symbols = {}


addEventListener("DOMContentLoaded", ()=> {
  console.log("Connected")

  // const baseURL = "https://cloud.iexapis.com/beta/tops?token=pk_72911ae29fff44d0884ff40f905f7cdb&symbols="
  // const sampleStocks = ["aapl", "amzn", "boa", "snap", "BRK.B", "baba", "fb", "adbe"]

  // addEventListener.onSetState("setState", ()=> {
  //   // listen for setState
  // })

// let state = new State()
  // setiframewidth(),
  // updateState();

  getStocks();
  showMarketStatus();
  })

  class State {
    constructor(userName, id, sectors, display, loggedIn, available_cash){
      this.state = {
        userName: "",
        id: "",
        sectors: [],
        symbols: {},
        display: "",
        loggedIn: false,
        available_cash: 11000

        // this.userName = userName,
        // this.id = id,
        // this.sectors = sectors,
        // this.display = display,
        // this.loggedIn = loggedIn,
        // this.available_cash = available_cash

      }
    }
  }

  // updateState(){
  //
  // }

//   function money_round(num) {
//     return Math.ceil(num * 100) / 100;
// }



// research setTimeout() LEFT OFF HERE
  // function loopFetch(){
  //   // console.log("loop fetch working!");
  //   setInterval(getStocks(), 2000)
  // }

  function simulateFluctuation(){

  }

  function setiframewidth(){
    document.querySelector("#iframe").width = this.window.innerWidth
  }

  function priceFormatter(int){
    // left off here
    let intString = int.toString();
    let dollars;
    let cents;

    if (intString.split('.')){
      dollars = intString.split('.')[0]

    } else{
      dollars = 00
    }

    if (intString){}



    cents = intString.split('.')[1]
    //

    // if (cents.length === 0 || cents.length === undefined){
    //   cents = "00"
    // } else if (cents.length > 2) {
    //   cents = cents.substring(0, 2)
    // }else {
    //   cents = intString.split('.')[1]
    // }

    //
    return `$${dollars}.${cents}`
    //
  }

  function formatInteger(string){
    // converts string dollar value to integer
    // "hamburger".substring(3, 9) returns "burger"
//Remove dollar sign
let step1 = string.substring(1, (string.length))
let dollars = step1.split('.')[0]
let cents = step1.split('.')[1]
let formattedInt = parseInt(`${dollars}${cents}`)

//parseInt()
return formattedInt
  }

  function getExchange(string){
    //this function get the name of the exchange at which this stock is traded on
      //should be used to help generate a trading view analytics report
    if(string.toUpperCase().includes("NY")){
      return "NYSE"
    }else{
      return "NASDAQ"
    }
  }

  function fetchIntrinio(stockSymbol){
    // stock sybol must be in all caps
    let url = `https://api-v2.intrinio.com/companies/${stockSymbol}?api_key=OmUzYTgxMzljMzZlYjNlMzAyZjhmZTRmZmJmOGU4MzQ5`

    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(intrinioStock){
        console.log(intrinioStock);
        let sym = intrinioStock.ticker.toUpperCase()
        let exc = getExchange(intrinioStock.stock_exchange)
        let exSym = `${exc}:${sym}`
        //
        return exSym
        // exchange must return string in the following format: "NASDAQ:AMZN"
        // "symbol": "NASDAQ:AMZN",
      })

    }


  function showTradingViewChart(){
    console.log("show trading view chart button clicked")
    // change the current_page property to reflect trading view info

    // extract the
  }

  function showMarketStatus(){
    // id="market_open_close"
    let status = document.getElementById("market_open_close")


    if (marketOpen()){
      status.innerText = "Markets: OPEN"
      status.style.color = "green"
    }else{
      status.innerText = "Markets: CLOSED"
      status.style.color = "red"

    }
  }


  function marketOpen(){
    // return true if time is between 9:30 and 4 PM
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()

    if(hours === 9 && minutes >= 30){
      return true;
    }else if (hours > 9 && hours < 16) {
      return true
    }else{
      return false
    }
    //
  }


  function initDataFlow(){
    setInterval()
  }

  function buyOrder(qtySelect,symbol,currentQty){
    //

    if (marketOpen()){
      // upon click, render buy form
          //POST fetch to JSON file Ann helped with
      console.log(`Buy button clicked for: ${event.target.parentElement.parentElement.innerText}!`)
      //
      // confirm(`Press okay to execute stock BUY for: ${event.target.parentElement.parentElement.innerText}!`)
      // fetch(`http://localhost:4000/`)

      // find the value in the number selector
      let buyQty = parseInt(qtySelect.value)

      // create a patch request to local host 4000

      symbols[symbol.toUpperCase()].qty += buyQty
      renderStocks()

      // fetch(`http://localhost:4000/${symbol}`, {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'PATCH',
      //   body: JSON.stringify({qty: currentQty + buyQty})
      // }).then(response => response.json())
      // .then(data=> console.log(data))





 //      /// PATCH EXAMPLE
 // fetch(API_URL + API_PATH + 'tasks', {
 //   headers: {
 //     'Accept': 'application/json',
 //     'Content-Type': 'application/json'
 //   },
 //   method: 'PATCH',
 //   body: JSON.stringify( { task: task } )
 // })


//

    }else{
      console.log(`Sorry, this function is only available during market hours. Please try again later!`)
    }


  }

  function sellOrder(qtySelect, symbol){
    if (marketOpen()){
      // upon click, render buy form
          //POST fetch to JSON file Ann helped with
      console.log(`Sell button clicked for: ${event.target.parentElement.parentElement.innerText}!`)
      let buyQty = parseInt(qtySelect.value)

      // create a patch request to local host 4000

      symbols[symbol.toUpperCase()].qty -= buyQty
      renderStocks()
    }else{
      console.log(`Sorry, this function is only available during market hours. Please try again later!`)
    }
  }

  // style="display: none;"
  function getStocks(){
    console.log("function: getStocks working!")
    let baseURL = "";
    let sampleStocks = "";
    // let total = 0

    if (marketOpen()){
      //
      // using JSON file as default
      baseURL = "http://localhost:4000/"
      // baseURL = "https://cloud.iexapis.com/beta/tops?token=pk_72911ae29fff44d0884ff40f905f7cdb&symbols="
      sampleStocks = ["aapl", "amzn", "boa", "SNAP", "BRK.B", "baba", "fb", "adbe", "JPM", "F", "T"]

    }else{
      baseURL = "http://localhost:4000/"
      sampleStocks = ["aapl", "amzn", "boa", "SNAP", "BRK.B", "baba", "fb", "adbe", "JPM", "F", "T"]

    }

    sampleStocks.forEach(symbol => {
      fetch(baseURL + symbol)
        .then(function(response) {
          return response.json();
        })
        .then((data) => {
          symbols[symbol.toUpperCase()] = data[0]
        })
        .then(function(){
          renderStocks()
        })
    })

    //

    // let baseURL = "https://cloud.iexapis.com/beta/tops?token=pk_72911ae29fff44d0884ff40f905f7cdb&symbols="
    // let baseURL = "http://localhost:4000/"
    // const sampleStocks = ["aapl", "amzn", "boa", "SNAP", "BRK.B", "baba", "fb", "adbe", "JPM", "F", "T"]
    // let stocksContainer = []

    // loop through stock symbols
    sampleStocks.forEach((stock)=> {

      fetch(baseURL+stock)
        .then(function(response) {
          return response.json();
        })
        .then(function(stockInfo) {




        })

    })
    //concatenate each stock symbol to the end of base URL
    // console.log(container)
  }


  function clearRootDiv(){
    //get root div of application
    let root = document.querySelector('.root')
    root.innerHTML = ""
  }

  function clearStocksCont(){
    //get root div of application
    let root = document.querySelector('#stocks_container')
    root.innerHTML = ""
  }

  function renderStocks(){
    clearStocksCont()
    Object.keys(symbols).forEach(symbol=> {


    // total =+ symbols[symbol].lastSalePrice
    //
    //get element to display total portfolio value <span>
    let totalPortValue = document.getElementById("totalValueNum")

      // find stocks_container div
    let container = document.getElementById("stocks_container")

    let li = document.createElement('div')
    li.classList.add("row")

    let stockSym = document.createElement('a')
    stockSym.innerText = `${symbols[symbol].symbol}`
    //click should display the stock chart associated with clicked stock symbol
    //adding on click functionality
    stockSym.addEventListener("click", ()=>{
      showTradingViewChart();
    })


    let stockQty = document.createElement('a')
    stockQty.innerText = `${symbols[symbol].qty}`


    let stockValue = document.createElement('a')
    // stockValue.innerText = `$${Math.ceil(symbols[symbol].lastSalePrice)}`
    stockValue.innerText = `${(symbols[symbol].lastSalePrice).toFixed(2)}`


    let totalValue = document.createElement('a')

    totalValue.innerText = `${(symbols[symbol].lastSalePrice * symbols[symbol].qty).toFixed(2)}`
    // totalValue.innerText = `$${symbols[symbol].lastSalePrice * symbols[symbol].qty}`
// symbols[symbol].lastSalePrice * symbols[symbol].qty
//
//
    let stockCost = document.createElement('a')
    stockCost.innerText = `${symbols[symbol].cost.toFixed(2)}`

    let stockEquity = document.createElement('a')
    // stockEquity.innerText = `$${(symbols[symbol].lastSalePrice *symbols[symbol].qty - symbols[symbol].cost * symbols[symbol].qty)}.00`
    stockEquity.innerText = `${((symbols[symbol].lastSalePrice - symbols[symbol].cost) * symbols[symbol].qty).toFixed(2)}`
        // .toFixed(2))

    let symbolDiv = document.createElement('div')
      symbolDiv.appendChild(stockSym)
      symbolDiv.classList.add("col")
    let qtyDiv = document.createElement('div')
      qtyDiv.appendChild(stockQty)
      qtyDiv.classList.add("col")
    let valueDiv = document.createElement('div')
      valueDiv.appendChild(stockValue)
      valueDiv.classList.add("col")
    let totalValueDiv = document.createElement('div')
      totalValueDiv.appendChild(totalValue)
      totalValueDiv.classList.add("col")
    let costDiv = document.createElement('div')
      costDiv.appendChild(stockCost)
      costDiv.classList.add("col")
    let equityDiv = document.createElement('div')
      equityDiv.appendChild(stockEquity)
      equityDiv.classList.add("col")


    //consider making equity green if positive and red if negative

//

    // create quantity picker and append it to buy sell div

//         <div class="form-group">
//   <label for="exampleFormControlSelect2">Example multiple select</label>
//   <select multiple="" class="form-control" id="exampleFormControlSelect2">
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//     <option>4</option>
//     <option>5</option>
//   </select>
// </div>



      // let formGroupDiv = document.createElement('div')
      // formGroupDiv.classList.add('form-control')
      // qtyPickerDiv.appendChild(formGroupDiv)
      //   let select = document.createElement('select')
      //   select.classList.add('form-control')
      //   select.appendChild(qtyPickerDiv)
      //     let option1 = document.createElement('option')
      //     option1.innerText = 1
      //     let option2 = document.createElement('option')
      //     option2.innerText = 2
      //     let option3 = document.createElement('option')
      //     option3.innerText = 3
      //     let option4 = document.createElement('option')
      //     option4.innerText = 4
      //     let option5 = document.createElement('option')
      //     option5.innerText = 5
      //
      //     select.append(option1,option2,option3,option4,option5)

//



    let buySelldiv = document.createElement('div')
    buySelldiv.classList.add("buy_sell_div")

    let qtySelect = document.createElement('select')
    qtySelect.classList.add("qty_options")


    for(let i = 1; i <= symbols[symbol].qty; i++) {
      let option = document.createElement('option')
      option.value = i
      option.innerText = i
      qtySelect.appendChild(option)
      //
    }


    let buyBtn = document.createElement('button')
      buyBtn.innerText = "BUY"
      buyBtn.classList.add("btn-outline-success")
      buyBtn.addEventListener("click", ()=> {
        buyOrder(qtySelect,symbols[symbol].symbol,symbols[symbol].qty)
      })

    let sellBtn = document.createElement('button')
      sellBtn.innerText = "SELL"
      sellBtn.classList.add("btn-outline-danger")
      sellBtn.addEventListener("click", ()=> {
        sellOrder(qtySelect,symbols[symbol].symbol,symbols[symbol].qty)
      })



    buySelldiv.append(qtySelect, buyBtn, sellBtn)
    // li.append(symbolPriceDiv, buySelldiv)
    li.append(symbolDiv, qtyDiv, valueDiv, totalValueDiv, costDiv, equityDiv, buySelldiv)
    //
    container.appendChild(li)
    })
  }
