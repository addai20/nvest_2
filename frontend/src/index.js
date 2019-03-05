addEventListener("DOMContentLoaded", ()=> {
  console.log("Connected")

  // const baseURL = "https://cloud.iexapis.com/beta/tops?token=pk_72911ae29fff44d0884ff40f905f7cdb&symbols="
  // const sampleStocks = ["aapl", "amzn", "boa", "snap", "BRK.B", "baba", "fb", "adbe"]

  // addEventListener.onSetState("setState", ()=> {
  //   // listen for setState
  // })
  debugger
  marketOpen();
  getStocks();

  })
// research setTimeout() LEFT OFF HERE
  // function loopFetch(){
  //   // console.log("loop fetch working!");
  //   setInterval(getStocks(), 2000)
  // }

  function marketOpen(){
    // return true if time is between 9:30 and 4 PM
    let now = new Date()

    let hours = now.getHours()
    let minutes = now.getMinutes()

    if(hours === 9 && minutes > 30){
      return true;
    }else if (hours > 9 && hours < 16) {
      return true
    }else{
      return false
    }


    // debugger
  }


  function initDataFlow(){
    setInterval()
  }

  function buyOrder(){
    // debugger
    console.log(`Buy button clicked for: ${event.target.parentElement.parentElement.innerText}!`)
    // upon click, render buy form
        //POST fetch to JSON file Ann helped with
  }

  function sellOrder(){
    // debugger
    console.log(`Sell button clicked for: ${event.target.parentElement.parentElement.innerText}!`)
    // upon sell, render sell form

    // upon submit of sell form:
        // POST fetch to backend ??? Think about this further...

  }

  // style="display: none;"
  function getStocks(){
    console.log("function: getStocks working!")
    // const baseURL = "https://cloud.iexapis.com/beta/tops?token=pk_72911ae29fff44d0884ff40f905f7cdb&symbols="
    const baseURL = "http://localhost:4000/"
    const sampleStocks = ["aapl", "amzn", "boa", "SNAP", "BRK.B", "baba", "fb", "adbe", "JPM", "F", "T"]
    let stocksContainer = []

    // loop through stock symbols
    sampleStocks.map((stock)=> {

      fetch(baseURL+stock)
        .then(function(response) {
          return response.json();
        })
        .then(function(stockInfo) {
          // store stock in stocksContainer
            //note: this fetch returns an object nested within an array!
          // console.log(stockInfo[0])
          // store ul in a variable
          let ul = document.querySelector('.stocks_list')
          ul.classList.add("list-group")
          // create a list item & anchorTag
          let symbolPriceDiv = document.createElement('div')


          let li = document.createElement('li')
          li.classList.add("list-group-item")
          li.innerText = `${stockInfo[0].symbol} - $${stockInfo[0].bidPrice}`
          let a = document.createElement('a')

          // create buttons to buy and sell stock
            // add event listeners to buttons

          let buySelldiv = document.createElement('div')

          let buyBtn = document.createElement('button')
            buyBtn.innerText = "BUY"
            buyBtn.addEventListener("click", ()=> {
              buyOrder()
            })

          let sellBtn = document.createElement('button')
            sellBtn.innerText = "SELL"
            sellBtn.addEventListener("click", ()=> {
              sellOrder()
            })


          // append li to the
          // debugger
          a.appendChild(li)
          ul.appendChild(a)

          buySelldiv.append(buyBtn,sellBtn)
          li.append(symbolPriceDiv, buySelldiv)


        })

    })
    //concatenate each stock symbol to the end of base URL
    console.log(stocksContainer)
  }
