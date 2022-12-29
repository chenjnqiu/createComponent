import React, { Children, cloneElement, createRef, PureComponent } from 'react';
import { isForwardRef } from 'react-is';

import { WaypointPosition } from './position';
import { ICancelable } from '../../utils/types';
import isBrowser from '../../utils/isBrowser';
import isDOMElement from '../../utils/isDOMElement';
import { defer } from 'lodash';


export interface IWaypointCallbackData {
    currentPosition: WaypointPosition;
    previousPosition: WaypointPosition;
    event: Event | null;
    waypointTop: number;
    waypointBottom: number;
    viewportTop: number;
    viewportBottom: number;
}

export interface IWaypointProps { 
    scrollableAncestor?: HTMLElement | Window;
    children?: React.ReactNode;
    topOffset?: number | string;
    bottomOffset?: number | string;
    horizontal?: boolean;
    fireOnRapidScroll?: boolean;
    onEnter?: (data: IWaypointCallbackData) => void;
    onLeave?: (data: IWaypointCallbackData) => void;
    onPositionChange?: (data: IWaypointCallbackData) => void;
}

const DEFAULT_OFFSET = 0

export class Waypoint extends PureComponent<IWaypointProps> {
    static defaultProps = {
        topOffset: DEFAULT_OFFSET,
        bottomOffset: DEFAULT_OFFSET,
        horizontal: false,
        fireOnRapidScroll: true,
    }
    private refElement: React.MutableRefObject<Element> = createRef<Element>();
    private cancelOnNextTick: ICancelable;
    private scrollEventListenerUnsubscribe: () => void;
    private resizeEventListenerUnsubscribe: () => void;
    private scrollableAncestor: HTMLElement | Window;
    private previousPosition = WaypointPosition.Unknown;
    componentDidMount() {
        if(!isBrowser) {
            return
        }
        this.cancelOnNextTick = defer(() => {
            this.cancelOnNextTick = null;
            const { children } = this.props;

            // Before doing anything, we want to check that this.refElement is available in Waypoint
            ensureRefIsUsedByChild(children, this.refElement.current);
            this.scrollableAncestor = this.findScrollableAncestor();
            this.scrollEventListenerUnsubscribe = 
        })
    }

    private findScrollableAncestor(): HTMLElement | Window {
        const { horizontal, scrollableAncestor } = this.props;
        if (scrollableAncestor) {
            return scrollableAncestor;
        }
        let node: Node = this.refElement.current;
        while(node.parentNode) {
            node = node.parentNode;
            if (node === document.body) {
                // We've reached all the way to the root node.
                return window;
            }
            const style = getComputedStyle(node as Element)
            const overflowDirec = horizontal ? 
                style.getPropertyValue('overflow-x') :
                style.getPropertyValue('overflow-y');
            const overflow = overflowDirec || style.getPropertyValue('overflow');
            if(overflow === 'auto' || overflow === 'scroll') {
                return node as HTMLElement;
            }
        }
        return window;
    }



    render() { 
        const { children } = this.props
        if(!children) {
            return (
             <span
                ref={this.refElement as React.RefObject<HTMLSpanElement>}
                style={{ fontSize: 0 }}
                className="cjq-waypoint-marker"
             />
            )
        }
        const child = Children.only(children);
        if (isDOMElement(child) || isForwardRef(child)) { 
           const ref = () => {

           } 
        }

    }
    
}

function ensureRefIsUsedByChild(children, ref) {
    if (children && !isDOMElement(children) && !ref) {
      throw new Error(
        '<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a ' +
          'DOM element (e.g. <div>) nor does it use the innerRef prop.\n'
      );
    }
  }