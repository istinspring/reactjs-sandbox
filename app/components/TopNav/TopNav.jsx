import React from 'react';

/*
   Fixed navbar component.
 */
class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#email"
                    style={{ width: 40}}>
              <span className="sr-only">Send e-mail</span>
              <a href="mailto:contact@seethisproperty.com">
                <i className="fa fa-envelope fa-5"></i>
              </a>
            </button>
            <button type="button" className="navbar-toggle collapsed"
                    Adata-toggle="collapse" data-target="#phone"
                    style={{ width: 40 }}>
              <span className="sr-only">Call by phone</span>
              <a href="tel:18557892800">
                <i className="fa fa-phone fa-5"></i>
              </a>
            </button>
            <a className="navbar-brand" href="index.html">SeeThisProperty</a>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="tel:18557892800">
                  <i className="fa fa-phone"></i> (855) 789-2800
                </a>
              </li>
              <li>
                <a href="mailto:contact@seethisproperty.com">
                  <i className="fa fa-envelope"></i> Request Viewing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
