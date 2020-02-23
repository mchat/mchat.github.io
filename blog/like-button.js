"use strict";

(function() {

  const URL_REGEX = /\/blog\/([^\/]+)/;

  function getPostId() {
    const currentUrl = window.location.pathname;
    const urlMatch = currentUrl.match(URL_REGEX);

    if (urlMatch && urlMatch[1]) {
      return urlMatch[1];
    }

    return null;
  }

  /*
   *
   *  Local State Functions
   *
   */

  const LOCAL_STATE = {
    likes: 0,
    isLiked: false
  }

  const STORAGE_KEY = "like-button";

  function getStorageData() {
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (err) {
      return {};
    }
  }

  function getPostData(postId, key) {
    if (window.localStorage) {
      const data = getStorageData();

      if (data[postId]) {
        return data[postId][key];
      }
    }

    return LOCAL_STATE[key];
  }

  function setPostData(postId, key, value) {
    if (window.localStorage) {
      const data = getStorageData();

      if (!data[postId]) {
        data[postId] = {};
      }

      data[postId][key] = value;

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    LOCAL_STATE[key] = value;
  }

  function getLikes() {
    return getPostData(getPostId(), "likes");
  }
  function setLikes(likes) {
    return setPostData(getPostId(), "likes", likes);
  }

  function getIsLiked() {
    return getPostData(getPostId(), "isLiked")
  }
  function setIsLiked(isLiked) {
    return setPostData(getPostId(), "isLiked", isLiked);
  }

  /*
   *
   *  Button Functions
   *
   */

  function getButtonText(likes) {
    if (likes === 1) {
      return "1 Person Likes This Post";
    }

    // IE11 is why we cannot have nice things
    return likes + " People Like This Post";
  }

  function updateButton(button, likes, isLiked) {
    const likeCount = button.querySelector(".like-count");
    likeCount.innerText = getButtonText(likes);

    const icon = button.querySelector("i");
    icon.className = isLiked ? "fa fa-heart" : "fa fa-heart-o";
  }

  /*
   *
   *  Firebase Functions
   *
   */

  function initializeFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyBxf-SOS84o3ZYzc3CXocAv6ewb_sBBZxE",
      authDomain: "likes-dfaad.firebaseapp.com",
      databaseURL: "https://likes-dfaad.firebaseio.com",
      projectId: "likes-dfaad",
      storageBucket: "likes-dfaad.appspot.com",
      messagingSenderId: "121961913296",
      appId: "1:121961913296:web:a1aa317f92cdf6aceff7d5"
    };

    firebase.initializeApp(firebaseConfig);
  }

  /*
   *
   *  Main Function
   *
   */

  function setUpLikeButton() {
    const likeButton = document.querySelector(".like-button");

    if (!likeButton) {
      return;
    }

    initializeFirebase();

    const server = firebase.functions();
    const like = server.httpsCallable("like");
    const unlike = server.httpsCallable("unlike");

    const db = firebase.firestore();
    const postRef = db.collection("posts").doc(getPostId());

    postRef.get().then(function(post) {
      const postData = post.exists ? post.data() : { likes: 0 };

      setLikes(postData.likes);
      updateButton(likeButton, getLikes(), getIsLiked());
    });

    function toggleLike() {
      const postId = getPostId();

      const isLiked = getIsLiked();
      const willBeLiked = !isLiked;

      if (isLiked) {
        unlike({ postId: postId });
        setLikes(Math.max(getLikes() - 1, 0));
      } else {
        like({ postId: postId });
        setLikes(getLikes() + 1);
      }

      setIsLiked(willBeLiked);
      updateButton(likeButton, getLikes(), willBeLiked);
    }

    likeButton.addEventListener("click", toggleLike);
  }

  setUpLikeButton();
})();
