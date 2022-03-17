import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopData
} from "../../store/actionCreators";

import THThemeHeaderRCM from '@/components/theme-header-rcm';
import THTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function THRankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getTopData(0));
    dispatch(getTopData(2));
    dispatch(getTopData(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <THThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      <div className="tops">
        <THTopRanking info={state.topUpList}/>
        <THTopRanking info={state.topNewList}/>
        <THTopRanking info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})
