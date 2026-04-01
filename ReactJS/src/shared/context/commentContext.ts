import React from "react";

type CommentContextType = {
  value: string;
  onChange: (value: string) => void;
}

const commentContext = React.createContext<CommentContextType>({
  value: '',
  onChange: () => {},
})

export default commentContext;