// WhatsApp Integration Functions
function bookDemoClass() {
    const message = `Hello! I'm interested in booking a demo class with Pinky Negi at SoulTouchYoga. Please provide me with more information about available slots and pricing.`;
    const whatsappUrl = `https://wa.me/919634016536?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function bookClass(classType, price) {
    const message = `Hello! I'm interested in booking the ${classType} at SoulTouchYoga. Price: ${price}. Please provide me with more information about available slots and booking process.`;
    const whatsappUrl = `https://wa.me/919634016536?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function sendWhatsAppMessage(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const classType = document.getElementById('contactClassType').value;
    const message = document.getElementById('contactMessage').value;
    
    const whatsappMessage = `*New Inquiry from SoulTouchYoga Website*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Class Type:* ${classType}
*Message:* ${message}

Thank you for your interest in our yoga classes!`;
    
    const whatsappUrl = `https://wa.me/919634016536?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.background = '#27ae60';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '#74b9ff';
        event.target.reset();
    }, 3000);
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const inputs = form.querySelectorAll('input, textarea, select');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        form.reset();
                    }, 2000);
                }, 1500);
            }
        });
    });
});

// Animated Counters
function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const statisticsSection = document.querySelector('.statistics');
    if (statisticsSection) {
        observer.observe(statisticsSection);
    }
});

// Meditation Timer
let timerInterval;
let timeLeft = 300; // 5 minutes default

function setTimer(minutes) {
    timeLeft = minutes * 60;
    updateTimerDisplay();
    resetTimer();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    const startBtn = document.getElementById('startBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    if (startBtn.textContent === 'Start') {
        startBtn.textContent = 'Stop';
        startBtn.style.background = '#e74c3c';
        
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                startBtn.textContent = 'Start';
                startBtn.style.background = '#74b9ff';
                alert('Meditation session completed!');
            }
        }, 1000);
    } else {
        clearInterval(timerInterval);
        startBtn.textContent = 'Start';
        startBtn.style.background = '#74b9ff';
    }
    
    resetBtn.style.display = 'inline-block';
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 300;
    updateTimerDisplay();
    document.getElementById('startBtn').textContent = 'Start';
    document.getElementById('startBtn').style.background = '#74b9ff';
    document.getElementById('resetBtn').style.display = 'none';
}

// Breathing Exercise
let breathingInterval;
let isBreathing = false;

function startBreathing() {
    const breathingBtn = document.getElementById('breathingBtn');
    const breathingCircle = document.getElementById('breathingCircle');
    const breathingText = breathingCircle.querySelector('.breathing-text');
    
    if (!isBreathing) {
        isBreathing = true;
        breathingBtn.textContent = 'Stop Breathing';
        breathingBtn.style.background = '#e74c3c';
        
        let phase = 'inhale';
        let scale = 1;
        let opacity = 0.7;
        
        breathingInterval = setInterval(() => {
            if (phase === 'inhale') {
                scale += 0.02;
                opacity += 0.01;
                breathingText.textContent = 'Inhale';
                
                if (scale >= 1.5) {
                    phase = 'exhale';
                }
            } else {
                scale -= 0.02;
                opacity -= 0.01;
                breathingText.textContent = 'Exhale';
                
                if (scale <= 1) {
                    phase = 'inhale';
                }
            }
            
            breathingCircle.style.transform = `scale(${scale})`;
            breathingCircle.style.opacity = opacity;
        }, 100);
    } else {
        isBreathing = false;
        breathingBtn.textContent = 'Start Breathing';
        breathingBtn.style.background = '#74b9ff';
        clearInterval(breathingInterval);
        
        breathingCircle.style.transform = 'scale(1)';
        breathingCircle.style.opacity = '0.7';
        breathingText.textContent = 'Breathe';
    }
}

// Pose Gallery Modal
function showPoseDetails(pose) {
    const modal = document.getElementById('poseModal');
    const details = document.getElementById('poseDetails');
    
    const poseData = {
        mountain: {
            title: 'Mountain Pose (Tadasana)',
            description: 'A foundational standing pose that improves posture and balance.',
            instructions: [
                'Stand with feet together or hip-width apart',
                'Lengthen your spine and lift your chest',
                'Relax your shoulders and arms by your sides',
                'Engage your core and feel grounded through your feet',
                'Hold for 30-60 seconds'
            ],
            benefits: ['Improves posture', 'Strengthens thighs and core', 'Increases awareness', 'Reduces stress']
        },
        warrior: {
            title: 'Warrior Pose (Virabhadrasana)',
            description: 'A powerful standing pose that builds strength and confidence.',
            instructions: [
                'Step one foot back into a lunge position',
                'Bend your front knee to 90 degrees',
                'Keep your back leg straight and strong',
                'Raise your arms overhead or to shoulder level',
                'Hold for 30-60 seconds each side'
            ],
            benefits: ['Builds leg strength', 'Improves balance', 'Opens hips and chest', 'Increases stamina']
        },
        tree: {
            title: 'Tree Pose (Vrksasana)',
            description: 'A balancing pose that improves focus and stability.',
            instructions: [
                'Stand on one leg with the other foot on your inner thigh or calf',
                'Keep your standing leg strong and engaged',
                'Bring your hands to prayer position or raise them overhead',
                'Focus on a point in front of you for balance',
                'Hold for 30-60 seconds each side'
            ],
            benefits: ['Improves balance', 'Strengthens legs and core', 'Increases focus', 'Opens hips']
        },
        child: {
            title: 'Child\'s Pose (Balasana)',
            description: 'A gentle resting pose that promotes relaxation and release.',
            instructions: [
                'Kneel on the floor with your big toes touching',
                'Sit back on your heels and fold forward',
                'Extend your arms forward or rest them by your sides',
                'Rest your forehead on the mat',
                'Hold for 1-3 minutes'
            ],
            benefits: ['Relieves back tension', 'Calms the mind', 'Stretches hips and thighs', 'Promotes relaxation']
        }
    };
    
    const poseInfo = poseData[pose];
    details.innerHTML = `
        <h2>${poseInfo.title}</h2>
        <p class="pose-description">${poseInfo.description}</p>
        
        <div class="pose-instructions">
            <h3>How to Practice:</h3>
            <ol>
                ${poseInfo.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
        
        <div class="pose-benefits">
            <h3>Benefits:</h3>
            <ul>
                ${poseInfo.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closePoseModal() {
    document.getElementById('poseModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('poseModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Portfolio Slider
let currentSlideIndex = 0;
let autoPlayInterval;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    
    if (n >= slides.length) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = slides.length - 1;
    
    sliderWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // Update active states
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
    resetAutoPlay();
}

function goToSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
    resetAutoPlay();
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 5000); // Change slide every 5 seconds
}

// Initialize slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        showSlide(currentSlideIndex);
        startAutoPlay();
    }
});

// Parallax effect for hero floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}); 

// Calendar Functionality
let currentDate = new Date();
let selectedDate = null;
let selectedTimeSlot = null;

function generateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthElement = document.getElementById('currentMonth');
    
    // Update month display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;
    
    calendarDays.innerHTML = '';
    
    // Generate calendar days
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = date.getDate();
        
        // Check if date is in current month
        if (date.getMonth() !== month) {
            dayElement.classList.add('disabled');
        }
        
        // Check if date is today
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
            dayElement.classList.add('today');
        }
        
        // Check if date is in the past
        if (date < today) {
            dayElement.classList.add('disabled');
        }
        
        dayElement.addEventListener('click', () => selectDate(date));
        calendarDays.appendChild(dayElement);
    }
}

function selectDate(date) {
    if (date < new Date()) return; // Can't select past dates
    
    selectedDate = date;
    
    // Remove previous selections
    document.querySelectorAll('.calendar-day.selected').forEach(day => {
        day.classList.remove('selected');
    });
    
    // Add selection to clicked date
    event.target.classList.add('selected');
    
    updateBookingSummary();
}

function selectTimeSlot(time) {
    selectedTimeSlot = time;
    
    // Remove previous selections
    document.querySelectorAll('.time-slot.selected').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    // Add selection to clicked slot
    event.target.classList.add('selected');
    
    updateBookingSummary();
}

function updateBookingSummary() {
    const bookingDetails = document.getElementById('bookingDetails');
    const confirmBtn = document.getElementById('confirmBtn');
    
    if (selectedDate && selectedTimeSlot) {
        const dateString = selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        bookingDetails.innerHTML = `
            <p><strong>Selected Date:</strong> ${dateString}</p>
            <p><strong>Selected Time:</strong> ${selectedTimeSlot}</p>
            <p><strong>Instructor:</strong> Pinky Negi</p>
        `;
        
        confirmBtn.disabled = false;
    } else {
        bookingDetails.innerHTML = '<p>Select a date and time to book your session</p>';
        confirmBtn.disabled = true;
    }
}

function confirmBooking() {
    if (!selectedDate || !selectedTimeSlot) return;
    
    const dateString = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const message = `Hello! I would like to book a yoga session with Pinky Negi.

*Booking Details:*
📅 Date: ${dateString}
⏰ Time: ${selectedTimeSlot}
👩‍🏫 Instructor: Pinky Negi

Please confirm my booking and provide any additional information needed.`;
    
    const whatsappUrl = `https://wa.me/919634016536?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset selections
    selectedDate = null;
    selectedTimeSlot = null;
    document.querySelectorAll('.calendar-day.selected, .time-slot.selected').forEach(element => {
        element.classList.remove('selected');
    });
    updateBookingSummary();
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
}

// Initialize calendar when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
}); 