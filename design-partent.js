function App() {
  return (
    <div className="container">
      <div className="background-texture"></div>
      <header>
        <div className="infomation">
          <div className="ic ic--infomation">
            <img src="" alt="infomation" />
          </div>
          <div className="infomation--content">
            <p></p>
          </div>
        </div>
        <div className="logo">
          <div className="logo-name">
            <img src="" alt="" />
            <div className="logo-covid"></div>
          </div>
          <div className="ic ic--covid">
            <img src="" alt="logo" />
          </div>
        </div>
      </header>
      <main>
        <div className="box-data" id="global">
          <div className="background-texture">
            <img src="./images/bx-tx.svg" alt="bx-tx" />
          </div>
          <div className="box-data__header">
            <div className="title">global</div>
            <div className="icon"></div>
            <div className="reload"></div>
          </div>
          <div className="box-data__body">
            <div className="box-data--data-covid">
              <div className="data-covid--item">
                <div className="data-covid--number"></div>
                <div className="data-covid--type">
                  <div className="ic"></div>
                  <div className="data-covid--name">confirmed</div>
                </div>
              </div>
              <div className="data-covid--item">
                <div className="data-covid--number"></div>
                <div className="data-covid--type">
                  <div className="ic"></div>
                  <div className="data-covid--name">confirmed</div>
                </div>
              </div>
              <div className="data-covid--item">
                <div className="data-covid--number"></div>
                <div className="data-covid--type">
                  <div className="ic"></div>
                  <div className="data-covid--name">confirmed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-data__footer">
            <p>
              <span>last update:</span> 13:20:42, April 19th 2021
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
