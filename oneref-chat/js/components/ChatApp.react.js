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
 * Differs from original Flux-based version because we listen to the 
 * Thread store here, and pass along current state as props to
 * ThreadSection and MessageSection.
 */
function getStateFromStore(storeRef) {
  const threadStore = storeRef.getValue();
  return {
    threads: threadStore.getAllChrono(),
    currentThreadID: threadStore.currentThreadID,
    unreadCount: threadStore.unreadCount,
    currentThread: threadStore.getCurrentThread()
  };
}

var ChatApp = React.createClass({
  getInitialState: function() {
    return getStateFromStore(this.props.storeRef);
  },

  componentDidMount: function() {
    const storeRef=this.props.storeRef;
    storeRef.on("change",this._onChange);
  },

  componentWillUnmount: function() {
    const storeRef=this.props.storeRef;
    storeRef.removeListener("change",this._onChange);
  },

  /**
   * Event handler for 'change' events coming from the store
   */
  _onChange: function() {
    this.setState(getStateFromStore(this.props.storeRef));
  },

  render: function() {
    return (
      <div className="chatapp">
        <ThreadSection 
          threads={this.state.threads} 
          currentThreadID={this.state.currentThreadID} 
          unreadCount={this.state.unreadCount} 
          storeRefUpdater={this.props.storeRefUpdater} />
        <MessageSection
          thread={this.state.currentThread}
          storeRefUpdater={this.props.storeRefUpdater} />
      </div>
    );
  }

});

module.exports = ChatApp;
