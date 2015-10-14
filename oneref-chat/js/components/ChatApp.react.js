/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var MessageSection = require('./MessageSection.react');
var React = require('react');
var ThreadSection = require('./ThreadSection.react');

/**
 * Top level chat app.
 *
 * Differs from Flux version by taking all app state from appState property
 *
 */
var ChatApp = React.createClass({
  render: function() {
    const appState = this.props.appState;
    return (
      <div className="chatapp">
        <ThreadSection 
          threads={appState.getAllChrono()} 
          currentThreadID={appState.currentThreadID} 
          unreadCount={appState.unreadCount} 
          stateRefUpdater={this.props.stateRefUpdater} />
        <MessageSection
          thread={appState.getCurrentThread()}
          stateRefUpdater={this.props.stateRefUpdater} />
      </div>
    );
  }

});

module.exports = ChatApp;
