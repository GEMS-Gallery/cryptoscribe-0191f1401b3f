export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'body' : IDL.Text,
    'author' : IDL.Text,
    'timestamp' : IDL.Int,
  });
  const Result = IDL.Variant({ 'ok' : Post, 'err' : IDL.Text });
  return IDL.Service({
    'createPost' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [Result], []),
    'getPosts' : IDL.Func([], [IDL.Vec(Post)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
