import React, {useEffect} from 'react';
import {useLocalStore, useObserver} from 'mobx-react-lite';

export default function Timer(props) {
  const {createAt} = props;
  /**
   * 로컬에서 스토어를 생성하여 vue의 data() 혹은 state처럼 사용가능함.
   * @type {{dueTime: number}}
   */
  const timerStore = useLocalStore(() => {
    return {
      dueTime: 0,
    };
  });

  useEffect(() => {
    setInterval(() => {
      timerStore.dueTime = new Date() - createAt;
    }, 200);
  }, []);

  return useObserver(() => {
    return (
      <div>
        before {timerStore.dueTime}.000 sec
      </div>
    );
  });
}