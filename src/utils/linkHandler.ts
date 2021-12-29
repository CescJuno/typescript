const handleLinkClick = (link, history) => {
  if (link.startsWith(process.env.REACT_APP_BASE_URL)) {
    const test = link.replace(process.env.REACT_APP_BASE_URL, '');
    // var baseUrl = i18n.language === "ko-KR" ? "" : "/" + i18n.language;
    window.scrollTo(0, 0);
    history.push(test);
  } else {
    window.location.href = link;
  }
};

export default handleLinkClick;
