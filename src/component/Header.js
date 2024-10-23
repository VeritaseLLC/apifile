function Header() {
  return (
    <div>
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="navbar-holder d-flex align-items-center justify-content-between">
              <div class="navbar-header">
                <a href="#" class="menu-btn" data-toggle="modal" data-target="#menuModal"><i class="fa fa-bars"> </i></a>
                <a href="#" class="navbar-brand">
                  <img class="company-logo" src="images/softgates_logo_white.png" />
                  <div class="brand-text d-none d-md-inline-block"><strong class="text-white">Sales CRM</strong></div>
                </a>
              </div>
              <div class="top-search-bar w-50">
                <form>
                  <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search" />
                  </div>
                </form>
              </div>
              <div class="d-flex flex-row">

                <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">

                  <li class="nav-item"><a href="#" class="nav-link logout"> <span class="d-none d-sm-inline-block text-white">Logout</span><i class="fa fa-sign-out text-white"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section class="section-counts section-padding">
          <div class="container-fluid">
            <div class="d-flex">
              <h2>User List</h2>
              <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-plus"></i> Add User</button>
              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="myLargeModalLabel">Add User</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form class="form-horizontal" id="user_form">
                        <div class="form-group row">
                          {/* <label class="col-sm-4 form-control-label">User</label> */}
                          <div class="col-sm-8">
                            <form class="form-horizontal">
                              <div class="form-group row">
                                <label class="col-sm-4 form-control-label text-left" for="status"> Status</label>
                                <div class="col-sm-8">
                                  <input type="text" value="" class="form-control" id="status"/>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label class="col-sm-4 form-control-label text-left" for="date">Date</label>
                                <div class="col-sm-8">
                                  <input type="date" value="" class="form-control" id="date"/>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label class="col-sm-4 form-control-label text-left" for="renewal_date">Renewal Date</label>
                                <div class="col-sm-8">
                                  <input type="date" value="" class="form-control" id="renewal_date"/>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label class="col-sm-4 form-control-label text-left" for="id">Id</label>
                                <div class="col-sm-8">
                                <input type="text" value="" class="form-control" id="id" />
                                </div>
                              </div>
                              <div class="form-group row">
                                <label class="col-sm-4 form-control-label text-left" for="name">Customer Name</label>
                                <div class="col-sm-8">
                                <input type="text" value="" class="form-control" id="name" />
                                </div>
                              </div>
                              <div class="form-group row">
                                <label class="col-sm-4 form-control-label text-left" for="sendreminder">Send Reminder</label>
                                <div class="col-sm-8">
                                  <input type="text" value="" class="form-control" id="sendreminder" />
                                </div>
                              </div>

                            </form>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-primary">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-sm-2">
                <div class="form-group">
                  <input type="text" placeholder="Status" class="form-control" />
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <input type="text" placeholder="User" class="form-control" />
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="w-10">Status</th>
                    <th scope="col" class="w-15">Date</th>
                    <th scope="col" class="w-15">Renewal date</th>
                    <th scope="col" class="w-15" id="id">Id</th>
                    <th scope="col">Customer name</th>
                    <th scope="col">Send Reminder</th>
                    <th class="w-10 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="badge badge-active">Active</span>
                    </td>
                    <td scope="col">2020-11-17</td>
                    <td scope="col">2021-11-22</td>
                    <td>1 </td>
                    <td>Mario Speedwagon</td>
                    <td><a href="#">View</a></td>
                    <td class="text-center icons">
                      <div class="dropdown show">
                        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">View</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Delete</a>
                          <a class="dropdown-item" href="#">Active</a>
                          <a class="dropdown-item" href="#">Inactive</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="badge badge-inactive">Inactive</span></td>
                    <td scope="col">2020-11-17</td>
                    <td scope="col">2021-11-27</td>
                    <td>2</td>
                    <td>Petey Cruiser</td>
                    <td><a href="#">View</a></td>
                    <td class="text-center icons">
                      <div class="dropdown">
                        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">View</a>
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Delete</a>
                          <a class="dropdown-item" href="#">Active</a>
                          <a class="dropdown-item" href="#">Inactive</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <footer class="main-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <p>Smart Healthcare &copy; 2017-2020</p>
            </div>
            <div class="col-sm-6 text-right">

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Header;
