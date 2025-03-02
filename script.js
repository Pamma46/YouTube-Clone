// Sample video data
const videos = [
    {
      "thumbnail": "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
      "title": "In-Depth Lab Analysis of New Products 🧪🔬",
      "channel": "Labs",
      "views": "500K views",
      "timestamp": "12 days ago"
    },
    {
      "thumbnail": "https://www.figma.com/community/resource/c430bf3b-0f28-4290-a52f-0bd6634da096/thumbnail",
      "title": "Revolutionary Designs in UI/UX Development 🎨💻",
      "channel": " Design Studios",
      "views": "702K views",
      "timestamp": "8 months ago"
    },
    {
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc979ari5ncZyO4Kd5FAJUCPX_CkZmnzXtg&s",
      "title": "Live Stream Shock: Unexpected Confessions 🎥🔥",
      "channel": "Harshit Live",
      "views": "1.2M views",
      "timestamp": "3 weeks ago"
    },
    {
      "thumbnail": "https://static.vecteezy.com/system/resources/thumbnails/025/374/043/small/a-group-of-different-cameras-sitting-next-to-each-other-created-with-generative-ai-technology-photo.jpg",
      "title": "Unboxing the Latest Cameras: Tech Talk 📷🔧",
      "channel": "Tech Reviews",
      "views": "890K views",
      "timestamp": "2 days ago"
    },
    {
      "thumbnail": "https://i.ytimg.com/vi/p0mQkaA284Y/maxresdefault.jpg",
      "title": "Deep Conversations with Close Friends 💬🤔",
      "channel": "Chats",
      "views": "500K views",
      "timestamp": "2 months ago"
    },
    {
      "thumbnail": "https://i.ytimg.com/vi/0BAsrg_X318/maxresdefault.jpg",
      "title": "Behind the Scenes of the Latest Vlog 📹🎬",
      "channel": "The daily use",
      "views": "350K views",
      "timestamp": "4 days ago"
    },
    {
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTXCYomBbtpQ30twxY0U7bGhTCTTKXCSTlg&s",
      "title": "Skydiving Adventure: Overcoming My Fear 🪂😱",
      "channel": "Adventures",
      "views": "1.5M views",
      "timestamp": "5 weeks ago"
    },
    {
      "thumbnail": "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
      "title": "Giving Back: A Heartfelt Donation Event 💖🙌",
      "channel": "h.ravi Helps",
      "views": "250K views",
      "timestamp": "2 months ago"
    },
    {
      "thumbnail": "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg",
      "title": "Exploring Hidden Gems in Remote Islands 🌴✈️",
      "channel": "Travel Diaries",
      "views": "600K views",
      "timestamp": "6 months ago"
    },
    {
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezkhZEGyU-SbkR5X1RGxo8OxQFLfKonocyg&s",
      "title": "Unforgettable Party Night: Dance and Fun 🎉💃",
      "channel": "Life Style",
      "views": "750K views",
      "timestamp": "1 week ago"
    },
    {
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdPFA6r_IbzQJcyXrKT5TSritv0S_iWwFmw&s",
      "title": "Surprising My Best Friend with the Ultimate Gift 🎁💖",
      "channel": "The Show",
      "views": "1M views",
      "timestamp": "3 days ago"
    },
    {
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHWLa9PoJJ-AluPwNSu23NMVBFMLlTvc3qw&s",
      "title": "Q&A with My Biggest Supporter: Heartfelt Moments 💬🌟",
      "channel": "Vlogs Live",
      "views": "420K views",
      "timestamp": "7 days ago"
    },
    {
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ozqBnnMvBta3Jb-pxm0ayWTndnNDd5bQNeJHSQFMOG36xlC-JwB5lmsWvDuKgGezoSY&usqp=CAU",
      "title": "Caught on Camera: The Funniest Prank Ever! 😂📹",
      "channel": "Pranks Unleashed",
      "views": "950K views",
      "timestamp": "1 month ago"
    }
  ]
    
  // Function to create video cards
  function createVideoCards() {
    const videosGrid = document.querySelector(".videos-grid")
  
    videos.forEach((video) => {
      const videoCard = document.createElement("div")
      videoCard.className = "video-card"
  
      videoCard.innerHTML = `
              <div class="thumbnail">
                  <img src="${video.thumbnail}" alt="${video.title}">
              </div>
              <div class="video-info">
                  <div class="channel-avatar">
                  </div>
                  <div class="video-details">
                      <h3 class="video-title">${video.title}</h3>
                      <p class="channel-name">${video.channel}</p>
                      <p class="video-stats">${video.views} • ${video.timestamp}</p>
                  </div>
              </div>
          `
  
      videosGrid.appendChild(videoCard)
    })
  }
  
  // Function to handle sidebar toggle
  function handleSidebarToggle() {
    const menuBtn = document.querySelector(".fa-bars")
    const sidebar = document.querySelector(".sidebar")
    const mainContent = document.querySelector(".main-content")
  
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed")
      mainContent.classList.toggle("expanded")
    })
  }
  
  // Function to handle filter buttons
  function handleFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))
        // Add active class to clicked button
        btn.classList.add("active")
      })
    })
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    createVideoCards()
    handleSidebarToggle()
    handleFilters()
  })
  
  