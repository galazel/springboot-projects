import './style.css'

document.querySelector('#app').innerHTML = `
  <form>
      <div class="main-container">
        <div class="title-container">
          <h1>Harvard University Admission Form</h1>
          <p>Enter your admission information below</p>
        </div>
        <div class="information-container">
          <table>
            <tr>
              <td><label for="name" name="name" id="name">Name</label></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  id="firstname"
                  placeholder="First Name"
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="middle"
                  placeholder="Middle Name"
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="lastname"
                  placeholder="Last Name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="birthdate" name="birthdate">Birth Date</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="date" id="birthdate" required />
              </td>
            </tr>
            <tr>
              <td><label for="gender" name="gender">Gender</label></td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="male"
                  required
                />
                <label for="gender">Male</label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="female"
                  required
                />
                <label for="gender">Female</label>
              </td>
            </tr>
            <tr>
              <td><label for="phone">Phone</label></td>
              <td><label for="email">E-mail Address</label></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="phone"
                  placeholder="09686168340"
                  id="phone"
                  required
                />
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="ex: glyzelgalagar@gmail.com"
                  id="email"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="street-address">Street Address</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label for="city">City</label></td>
              <td><label for="state">State/Province</label></td>
            </tr>
            <tr>
              <td><input type="text" name="city" id="city" required /></td>
              <td><input type="text" name="state" id="state" required /></td>
            </tr>
            <tr>
              <td><label for="zip">Postal/Zip Code</label></td>
            </tr>
            <tr>
              <td><input type="text" name="zip" id="zip" required /></td>
            </tr>
            <tr>
              <td>
                <label for="do-you-speak-eng"
                  >Do you speak any languages other than English</label
                >
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name="language"
                  id="language"
                  value="yes"
                  required
                />
                <label for="language">Yes</label>
                <input
                  type="radio"
                  name="language"
                  id="language"
                  value="no"
                  required
                />
                <label for="language">No</label>
              </td>
            </tr>
          </table>
        </div>
        <div class="button-container">
          <button class="next" onclick="educationPage()">Next</button>
        </div>
      </div>
    </form>
`
