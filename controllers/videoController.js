//render는 기본적으로 /views 폴더 내의 해당 파일을 찾아서 렌딩해준다.
//app.js에서 뷰 엔진에 pug를 설정했기 때문에 아래의 코드는 home.pug를 찾게 된다.
export const home = (req, res) => res.render('home');
export const search = (req, res) => res.render('search');
export const videos = (req, res) => res.render('videos');
export const upload = (req, res) => res.render('upload');
export const videoDetail = (req, res) => res.render('videoDetail');
export const editVideo = (req, res) => res.render('editVideo');
export const deleteVideo = (req, res) => res.render('deleteVideo');
