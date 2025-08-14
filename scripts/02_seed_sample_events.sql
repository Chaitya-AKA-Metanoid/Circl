-- Seed script to populate database with sample events for production
-- Insert sample events for demonstration purposes

-- First, let's create a sample host profile (you can replace this with real user data)
INSERT INTO profiles (id, full_name, bio, experience, avatar_url) 
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Sarah Johnson',
  'Passionate fitness instructor and community organizer who loves bringing people together through movement and wellness.',
  'Certified Personal Trainer with 5+ years experience',
  '/golden-gate-park-runners.png'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO profiles (id, full_name, bio, experience, avatar_url) 
VALUES (
  '00000000-0000-0000-0000-000000000002',
  'Marco Rodriguez',
  'Professional chef and culinary artist who believes food brings communities together. Specializes in authentic Italian cuisine.',
  'Head Chef at Bella Vista Restaurant',
  '/italian-woman-chef-smiling-kitchen.png'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO profiles (id, full_name, bio, experience, avatar_url) 
VALUES (
  '00000000-0000-0000-0000-000000000003',
  'Alex Chen',
  'Tech entrepreneur and startup mentor passionate about building connections in the tech community.',
  'Senior Software Engineer at TechCorp',
  '/tech-networking-event.png'
) ON CONFLICT (id) DO NOTHING;

-- Insert sample events
INSERT INTO events (
  id, title, description, date, time, category, venue, address, city,
  image_url, rsvp_url, map_embed_url, host_id
) VALUES 
(
  '00000000-0000-0000-0000-000000000001',
  'Morning Yoga in Golden Gate Park',
  'Start your day with mindful movement and breathwork in the beautiful surroundings of Golden Gate Park. Perfect for all skill levels, from beginners to advanced practitioners. Bring your own mat and water bottle.',
  '2024-12-20',
  '8:00 AM',
  'Fitness & Sports',
  'Golden Gate Park Meadow',
  '1000 John F Kennedy Dr, San Francisco, CA 94117',
  'San Francisco',
  '/golden-gate-park-runners.png',
  'https://forms.google.com/yoga-signup',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890',
  '00000000-0000-0000-0000-000000000001'
),
(
  '00000000-0000-0000-0000-000000000002',
  'Italian Cooking Workshop',
  'Learn to make authentic Italian pasta from scratch! Join Chef Marco for an hands-on cooking experience where you''ll master the art of fresh pasta making and traditional sauces.',
  '2024-12-22',
  '6:00 PM',
  'Food & Drink',
  'Culinary Arts Studio',
  '456 Mission St, San Francisco, CA 94105',
  'San Francisco',
  '/pasta-making-hands.png',
  'https://eventbrite.com/cooking-workshop',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890',
  '00000000-0000-0000-0000-000000000002'
),
(
  '00000000-0000-0000-0000-000000000003',
  'Tech Startup Networking Night',
  'Connect with fellow entrepreneurs, developers, and tech enthusiasts in the Bay Area. Great opportunity to share ideas, find co-founders, or just meet like-minded people in tech.',
  '2024-12-25',
  '7:00 PM',
  'Technology',
  'Innovation Hub',
  '789 Market St, San Francisco, CA 94103',
  'San Francisco',
  '/tech-networking-event.png',
  'https://meetup.com/tech-networking',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890',
  '00000000-0000-0000-0000-000000000003'
) ON CONFLICT (id) DO NOTHING;
