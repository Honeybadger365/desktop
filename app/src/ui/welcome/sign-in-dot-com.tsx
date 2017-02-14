import * as React from 'react'
import { WelcomeStep } from './welcome'
import { SignIn } from '../lib/sign-in'
import { Dispatcher, SignInStep } from '../../lib/dispatcher'
import { Button } from '../lib/button'

interface ISignInDotComProps {
  readonly dispatcher: Dispatcher
  readonly advance: (step: WelcomeStep) => void
  readonly signInState: SignInStep
}

/** The Welcome flow step to login to GitHub.com. */
export class SignInDotCom extends React.Component<ISignInDotComProps, void> {
  public render() {
    return (
      <div id='sign-in-dot-com'>
        <h1 className='welcome-title'>Sign in to GitHub.com</h1>

        <SignIn
          currentStep={this.props.signInState}
          dispatcher={this.props.dispatcher}>
          <Button onClick={this.cancel}>Cancel</Button>
        </SignIn>
      </div>
    )
  }

  private cancel = () => {
    this.props.advance(WelcomeStep.Start)
  }
}
