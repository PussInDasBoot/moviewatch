import React from "react";
import { useTransition } from "react-spring";
import { useQuery } from '@apollo/react-hooks';
import { Movie } from "../../screens/Movies"
import WatchListItem from "./components/WatchListItem"
import { GET_WATCH_LIST } from "../../models/movies/queries"
import {
  WatchListSideBar,
  WatchListHeader,
  WatchListItems,
  WatchListFooter,
  CloseButton
} from "./styles";

interface IWatchListProps {
  isOpen: boolean;
  onWatchListClose: () => void;
}

export interface MovieData {
  watchlist: Movie[];
}

const WatchList: React.FC<IWatchListProps> = ({ isOpen, onWatchListClose }) => {
  // Ignore this, handles the slidey in animation for the watch list side bar
  const entryTransition = useTransition(isOpen, null, {
    from: { transform: "translateX(100%" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(100%)" }
  });

  const { data } = useQuery<MovieData>(GET_WATCH_LIST);

  function totalRunTime(data: MovieData): number {
    return data.watchlist.reduce((a, b) => a + b.runTime, 0);
  }

  return (
    <React.Fragment>
      {entryTransition.map(
        ({ item, key, props }) =>
          item && (
            <WatchListSideBar key={key} style={props}>
              <WatchListHeader>
                <CloseButton onClick={onWatchListClose}>close</CloseButton>
              </WatchListHeader>
              <WatchListItems>
                {data && data.watchlist.map(movie => {
                  return <WatchListItem movie={movie} key={movie.id} />
                })}
              </WatchListItems>
              <WatchListFooter>{data && totalRunTime(data)}</WatchListFooter>
            </WatchListSideBar>
          )
      )}
    </React.Fragment>
  );
};

export default WatchList;
