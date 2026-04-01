import React from "react";

interface ILifecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
  hasError: boolean
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
  constructor(props: ILifecycleProps) {
    super(props)

    this.state = { stateField: 0, isMounted: false, hasError: false };
    // this.handleClick = this.handleClick.bind(this)
  }

  static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
    return { stateField: props.someProp };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  //не использовать при PureComponent
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContext: any
    ): boolean {
      // return this.state != nextState || this.props != nextProps;
      return false;
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>
    }
    return <div>1</div>
  }

  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>
  ): any | null {
    return null;
  }
  

  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot?: any,
  ) {
    if (snapshot > 1000) {
      this.setState({});
    }
  }
  

  // public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //   logError(errorInfo.componentStack);
  // }

  // public componentDidMount() {
  //   document.addEventListener(type: 'resize', listener: () => {});
  //   setTimeout(callback:() => {}, ms:0);
  //   this.setState( state: {isMounted: true});
  // }

  // public componentWillUnMount() {
  //   document.removeEventListener(type: 'resize', listener: () => {});
  // }

  // private handleClick = () => {
  //   this.setState( state: {stateField: 1});
  // }
}