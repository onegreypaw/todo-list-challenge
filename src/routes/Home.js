import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className='page-home'>
        <div className='container container-fluid mt-3'>
          <div className='row'>
            <div className='col-12 col-md-8 offset-md-2'>
              <h1 className='mb-3'><a href='/todo-list'>Todo List Challenge</a></h1>
              <p>Create a simple <a href='/todo-list'>todo list</a> based on what is already stubbed out inside <span class='code'>routes/TodoList.js</span> with the following functionality:</p>
              <ul>
                <li>Add a form to add a simple "todo" item. E.g., "Water the lawn", "Get a better pencil",</li>
                <li>Add a button alongside each added todo item to be able to remove it from the list.</li>
              </ul>
              <p>The goal is to simply be able to add and remove items from a basic todo list. Feel welcome to add/edit anything in the project to suit your needs.</p>
              <p>No need to include any server-side integration, no persisted state required (no Redux).</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
