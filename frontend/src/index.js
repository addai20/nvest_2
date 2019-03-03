addEventListener("DOMContentLoaded", ()=> {
  console.log("Connected")

  const baseURL = "https://cloud.iexapis.com/beta/tops?token=pk_72911ae29fff44d0884ff40f905f7cdb&symbols="
  const sampleStocks = ["aapl", "amzn", "boa", "snap", "BRK.B", "baba", "fb", "adbe"]

  // addEventListener.onSetState("setState", ()=> {
  //   // listen for setState
  // })
  loopFetch()

  })
// research setTimeout() LEFT OFF HERE
  function loopFetch(){
    setInterval(getStocks(), 2000)
  }


  function initDataFlow(){
    setInterval()
  }

  // style="display: none;"
  function getStocks(){
    console.log("function: getStocks working!")
    const baseURL = "https://cloud.iexapis.com/beta/tops?token=pk_72911ae29fff44d0884ff40f905f7cdb&symbols="
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
          stocksContainer.push(stockInfo[0])
          // store ul in a variable
          let ul = document.querySelector('.stocks_list')
          // create a list item & anchorTag
          let li = document.createElement('li')
          let a = document.createElement('a')

          // create buttons to buy and sell stock
          let buyBtn = document.createElement('button')
          let sellBtn = document.createElement('button')
          buyBtn.innerText = "BUY"
          sellBtn.innerText = "SELL"

          li.innerText = `${stockInfo[0].symbol} - $${stockInfo[0].bidPrice}`

          // append li to the
          // debugger
          a.appendChild(li)
          ul.appendChild(a)
          ul.appendChild(buyBtn)
          ul.appendChild(sellBtn)


        })

    })
    //concatenate each stock symbol to the end of base URL
    console.log(stocksContainer)
  }
