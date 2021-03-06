import { NavLink } from "react-router-dom";
import "./home.css";
import "./feature-1.gif";
import appConfig from "../../config";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";
const Home = () => {
  const url = appConfig.api_url;

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = () => {
    fetch(url + "/blog/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogData(data.slice(0, 10));
        setLoading(false);
      });
  };

  //function for display blogs
  const displayBlog = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {blogData.map((blog) => (
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={url + "/" + blog.thumbnail}
                  height="200"
                />
                <CardContent>
                  <h4>{blog.title}</h4>
                  <p>{blog.description}</p>
                  <div className="d-flex justify-content-between">
                    <Button variant="contained">
                      <Link
                        to={"/view/" + blog._id}
                        variant="contained"
                        underline="none"
                        color="inherit"
                      >
                        View Full Blog
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  // const swiper = useRef(null);
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <header>
        {/* <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS --> */}
        <div class="overlay"></div>

        {/* <!-- The HTML5 video element that will create the background video on the header --> */}
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://player.vimeo.com/external/497754241.sd.mp4?s=ff5d6d8d95b8b1a46c3ec5e312480cab6cf65518&profile_id=164"
            // src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>

        {/* <!-- The header content --> */}
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">Hello! Welcome to </h1>
              <h1 className="mb-4 mb-md-0">
                <strong> Tech Blog</strong>{" "}
              </h1>
              <NavLink to="/signup">
                <Button
                  underline="none "
                  variant="contained"
                  sx={{
                    ":hover": {
                      color: "white",
                    },
                  }}
                  className="btn lead mt-3 mb-0"
                >
                  Let's Start Blogging
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <section className="features container mt-4">
        <div className="features-head text-center">
          <h2 className="h2 features-h2">Our features </h2>
          <p>
            This platform is about sharing latest tech blogs.Here anyone can
            create and read blogs about latest technologies of the world{" "}
          </p>
        </div>
        <div className="features-card row">
          <div class="col-md-4 mt-5">
            <div class="mycard">
              <div className="feature-icon">
                <lord-icon
                  src="https://cdn.lordicon.com/jvucoldz.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#1c7ed6"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </div>
              <div class="card-body">
                <h3 className="text-center">Updated Blogs</h3>
                <p className="text-center">Read blogs</p>
                <p className="text-center">Update your knowledge</p>
                <p className="text-center">And many more </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-5">
            <div class="mycard mycard-active">
              <div className="feature-icon">
                <lord-icon
                  src="https://cdn.lordicon.com/wloilxuq.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#1c7ed6"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </div>
              <div class="card-body">
                <h3 className="text-center">Latest Technology</h3>
                <p class="text-center">Create your blog easily</p>
                <p className="text-center">Post your blog</p>
                <p className="text-center">Serve</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-5">
            <div class="mycard">
              <div className="feature-icon ">
                <lord-icon
                  src="https://cdn.lordicon.com/qhgmphtg.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#1c7ed6"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </div>
              <div class="card-body">
                <h3 className="text-center">Latest Technology</h3>
                <p class="text-center">Create your blog easily</p>
                <p className="text-center">Post your blog</p>
                <p className="text-center">Serve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-2 mt-5">
        <div className="h3 mb-4 recent-blog-heading">Recent blogs</div>
        <div className="container">
          <div className="card homeBlog-Card">
            <div className="card-body">
              <div>{displayBlog()}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
