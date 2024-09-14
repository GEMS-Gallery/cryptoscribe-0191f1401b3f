import Int "mo:base/Int";

import Array "mo:base/Array";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Text "mo:base/Text";
import Nat "mo:base/Nat";

actor {
  type Post = {
    id: Nat;
    title: Text;
    body: Text;
    author: Text;
    timestamp: Int;
  };

  stable var posts : [Post] = [];
  stable var nextId : Nat = 0;

  public func createPost(title: Text, body: Text, author: Text) : async Result.Result<Post, Text> {
    let post : Post = {
      id = nextId;
      title = title;
      body = body;
      author = author;
      timestamp = Time.now();
    };
    posts := Array.append(posts, [post]);
    nextId += 1;
    #ok(post)
  };

  public query func getPosts() : async [Post] {
    Array.sort(posts, func(a: Post, b: Post) : { #less; #equal; #greater } {
      if (a.timestamp > b.timestamp) { #less }
      else if (a.timestamp < b.timestamp) { #greater }
      else { #equal }
    })
  };
}
