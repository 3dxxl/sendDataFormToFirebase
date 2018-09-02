import React, { Component } from "react";

export default class Checkbox extends Component {
  render() {
    return (
      <div className="radioContainer">
        <div className="radioButtons">
          <div class="ui form">
            <div class="grouped fields">
              <label>Auwahl</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="example2" checked="checked" />
                  <label>Once a week</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="example2" />
                  <label>2-3 times a week</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="example2" />
                  <label>Once a day</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="example2" />
                  <label>Twice a day</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
